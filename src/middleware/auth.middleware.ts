import {Controller} from "../libs/types";
import {basicError, handleError} from "../libs/methods";


export const authMiddleware: Controller = async (req, res, next) => {
    try{
        const cookie = req.signedCookies['access']
        if(!cookie)
            return basicError(res, "Please login or signup to complete this operation!")
        Object.assign(req, {user: {id: cookie.userId}})
        next()
    }catch(err){
        handleError(res, "Please login and try again to complete this operation", 401)
    }
}

