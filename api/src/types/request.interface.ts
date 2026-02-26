import { Request as ExpressRequest } from 'express';

interface AuthenticatedRequest extends ExpressRequest {
    admin: boolean;
    uAuth: any;
    uGroups: any;
    uPoolId: any;
    uSub: any;
}

export interface Request extends AuthenticatedRequest {}
