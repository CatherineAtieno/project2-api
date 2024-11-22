import {NextFunction, Request, Response} from "express";

export interface ControllerRequest extends Request {
    user?: {
        id: string;
    }
}

export declare type Controller = (req: ControllerRequest, res: Response, next: NextFunction) => void;

