import * as pino from 'pino';
import { LoggerOptions } from 'pino';
import { pinoLambdaDestination, StructuredLogFormatter } from 'pino-lambda';
import { EnvironmentName } from '../types';

const env = process.env.ENV;

const level =
    env === EnvironmentName.LOCAL || env === EnvironmentName.DEVELOPMENT
        ? 'debug'
        : 'info';

const options: LoggerOptions = {
    level,
    // Disabling redaction as there is a disputed security concern and
    // we don't really need this feature at all.
    // redact: {
    //     censor: '**REDACTED**',
    //     paths: [
    //         'req.headers.authorization',
    //         'req.headers.cookie',
    //         '*.password',
    //         '*.token',
    //     ],
    // },
};

const destination = pinoLambdaDestination({
    formatter: new StructuredLogFormatter(),
});

export const logger = pino(options, destination);
