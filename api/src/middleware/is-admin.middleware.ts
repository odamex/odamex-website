import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Request } from '../types';

export const isAdminMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    /*
    const { data } = await selectQuery({
        sql: 'SELECT is_admin FROM users WHERE cognito_id = :cognitoId',
        parameters: [
            {
                name: 'cognitoId',
                value: {
                    stringValue: req.uSub,
                },
            },
        ],
    });

    if (!data.length || !data[0]) {
        res.status(StatusCodes.FORBIDDEN).json({
            data: [],
            message: 'User does not have permission to perform action.',
            success: false,
        });
        return;
    }
    */
    next();
};
