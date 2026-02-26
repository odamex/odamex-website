import * as express from 'express';
import { Router } from 'express';
import { getVersion } from './version.controller';

export const router: Router = Router();

router.route('/version').get(
    express.json({
        type: ['application/json'],
    }),
    getVersion,
);
