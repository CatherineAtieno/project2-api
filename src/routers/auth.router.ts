import {Router} from "express";
import {handleAdminSignup, handleUserSignup} from "../handlers/auth/handle.signup";
import {handleAdminLogin, handleUserLogin} from "../handlers/auth/handle.login";
import {handleVerifyAuth} from "../handlers/auth/handle.verifyAuth";


const authRouter = Router();

authRouter
    .post('/admin-signup', handleAdminSignup)
    .post('/admin-login', handleAdminLogin)
    .post('/user-signup', handleUserSignup)
    .post('/user-login', handleUserLogin)
    .get('/allowed', handleVerifyAuth)

export default authRouter;

