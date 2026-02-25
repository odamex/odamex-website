import * as awsServerlessExpress from 'aws-serverless-express';
import * as app from './app';
import { lambdaRequestTracker } from 'pino-lambda';

const withRequest = lambdaRequestTracker();

exports.handler = (event, context) => {
    withRequest(event, context);
    const server = awsServerlessExpress.createServer(app);
    awsServerlessExpress.proxy(server, event, context);
};
