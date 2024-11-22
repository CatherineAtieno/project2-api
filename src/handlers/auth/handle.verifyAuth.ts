import {Controller} from "../../libs/types";
import {handleError} from "../../libs/methods";


export const handleVerifyAuth: Controller = async (req, res) => {
    try{
        const cookie = req.signedCookies['access'];
        if (!cookie) {
            return res.status(401).json({
                status: 401
            })
        }
        res.status(200).end()
    }catch (err){
        console.log('Error: ', err)
        handleError(res, err)
    }
}

