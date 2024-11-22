import {Router} from "express";
import authRouter from "./auth.router";
import adminRouter from "./admin.router";
import sharedRouter from "./shared.router";


const router = Router();

router
    .use('/auth', authRouter)
    .use('/admin', adminRouter)
    .use('/app', sharedRouter)

export default router;

