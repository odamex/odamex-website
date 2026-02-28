import { Router } from 'express';
import { router as version } from './version/version.routes';

export const register = (router: Router) => {
    router.use('/api/v1/version', version);
};
