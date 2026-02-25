/* eslint-disable sort-imports */
import express = require('express');
import bodyParser = require('body-parser');
import awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
import * as routes from './routes';
import * as healthCheck from './routes/health-check';
import { router as cspReport } from './routes/security';
// eslint-disable-next-line @typescript-eslint/no-var-requires

const app = express();
const router = express.Router();

router.use(bodyParser.json({ limit: '10000kb' }));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
// TODO -> update to strick final domains only

// register before auth middleware is mounted
healthCheck.register(router);
router.use('/api/v1/security', cspReport);

router.use(async function (req: any, res, next) {
    res.header('X-Requested-With', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With,Accept',
    );
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,OPTIONS');
    // authentication info
    if (process.env.DEBUG_LOCAL) {
        req.uSub = process.env.DEBUG_COGNITO_ID;
    } else {
        const event = req.apiGateway.event;
        const claims = event.requestContext.authorizer.claims;

        req.idToken = req.header('authorization') as string;
        req.uAuth = claims;
        req.uSub = claims.sub;
        req.uGroups =
            'cognito:groups' in claims
                ? claims['cognito:groups'].split(',')
                : [];
        req.admin = req.uGroups.includes('Admins');
        req.uPoolId = claims.iss.split('/').slice(-1)[0];

        // add event logging for all requests
        console.log(
            `REQUEST: ${event.httpMethod} ${event.path} | uSub: ${req.uSub}`,
        );
    }

    next();
});

routes.register(router);

app.use('/', router);

// Export your express server so you can import it in the lambda function.
export = app;
