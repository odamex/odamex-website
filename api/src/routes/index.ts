import { Router } from 'express';
import * as dashboard from './dashboard';
import { router as grants } from './grants';
import * as keyDates from './key-dates';
import { router as users } from './users';

export const register = (router: Router) => {
    router.use('/api/v1/grants', grants);
    router.use('/api/v1/users', users);

    dashboard.register(router);
    keyDates.register(router);
};
