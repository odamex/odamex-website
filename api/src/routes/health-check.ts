import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
// By returning a simple 200 on any request,
// the health check route provides application status without the complexity of business logic
export const register = (router: Router): void => {
    router.get('/api/v1/health-check', async (req, res, next) => {
        res.status(StatusCodes.OK).json({ status: 'Healthy' });
    });
};
