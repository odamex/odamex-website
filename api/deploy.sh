set -e
ZIPPED="dist.zip"
FUNCTION_NAME="local-rest-api"
LAMBDA_ALIAS=$USERNAME

echo "running tsc"
[ -d "./built" ] && rm built -r # remove the transpiled JS so that we start fresh
npx tsc

echo "removing & reinstalling node_modules"
npm pkg delete scripts.prepare # disable husky's prepare script
npm prune --omit=dev  # only install production dependencies

echo "zipping the function"
zip -r -q -u $ZIPPED node_modules built package*.json -x "node_modules/.cache/*"

echo "updating lambda"

# deploy code and simultaneously publish new version
LAMBDA_VERSION=`aws lambda update-function-code \
    --function-name $FUNCTION_NAME \
    --zip-file fileb://$ZIPPED \
    --publish \
    --output text \
    --query Version`

ALIAS_EXISTS=`aws lambda list-aliases \
    --function-name $FUNCTION_NAME \
    --output text \
    --query "length(Aliases[?Name=='$LAMBDA_ALIAS'])"`

if [ $ALIAS_EXISTS = 1 ]; then
    echo " -- alias exists, updating"

    aws lambda update-alias \
        --function-name $FUNCTION_NAME \
        --name $LAMBDA_ALIAS \
        --function-version $LAMBDA_VERSION

else
    echo " -- alias does not exist, creating"

    aws lambda create-alias \
        --function-name $FUNCTION_NAME \
        --name $LAMBDA_ALIAS \
        --function-version $LAMBDA_VERSION \
        --description "$FUNCTION_NAME aliased for testing by $USERNAME"

    SOURCE_ARN="arn:aws:execute-api:us-east-1:175255461604:yuodj2nh9a/*/*/*"
    TIMESTAMP=$(date +%s)

    aws lambda add-permission \
        --function-name $FUNCTION_NAME:$LAMBDA_ALIAS \
        --principal apigateway.amazonaws.com \
        --source-arn $SOURCE_ARN \
        --statement-id $LAMBDA_ALIAS-$TIMESTAMP \
        --action "lambda:InvokeFunction"
fi

echo "revert repo back to dev mode"
npm pkg set scripts.prepare="[ -d ../../.git ] && husky || echo 'skipping husky'"
npm install

echo "process complete"