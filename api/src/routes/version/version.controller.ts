import { NextFunction, Response } from 'express';
import { Request } from '../../types';

export const getVersion = async function (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<any> {
    try {
        res.json({ version: '12.1.0' });
    } catch (error) {
        next(error);
    }
};