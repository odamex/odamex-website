import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

export class CognitoIdentityProviderClientSingleton {
    private static instance: CognitoIdentityProviderClient;

    /* istanbul ignore next */
    private constructor() {
        // Private constructor prevents direct instantiation
    }

    public static getInstance(): CognitoIdentityProviderClient {
        if (!CognitoIdentityProviderClientSingleton.instance) {
            CognitoIdentityProviderClientSingleton.instance =
                new CognitoIdentityProviderClient({
                    region: process.env.REGION,
                    // Add other client configuration here, such as credentials or endpoint
                });
        }

        return CognitoIdentityProviderClientSingleton.instance;
    }
}
