import {Controller} from "../../libs/types";
import {compareHash, handleError, setSignedAuthCookie} from "../../libs/methods";
import {api} from "../../index";
import jwt from "jsonwebtoken"

export const handleAdminLogin: Controller = async (req, res) => {
    try {
        const {userName, password} = req.body;
        if (!userName || !password)
            return res.status(401).json({error: 'Username and password are required'});
        // find if user exists
        const found = await api.admins.findOne({userName});
        if (!found)
            return res.status(401).json({error: 'Wrong username or password!'});
        // compare passwords
        if (!compareHash(password, found.password))
            return res.status(401).send({error: 'Wrong username or password!'});
        // generate token
        res = setSignedAuthCookie(res, {userId: found.id, role: 'admin'})
        res.status(200).json({
            message: "Welcome back!",
            auth: jwt.sign({loggedIn: true}, process.env.COOKIE_SECRET ?? "1234", {expiresIn: '6h'})
        })
    } catch (e) {
        handleError(res, e)
    }
}

export const handleUserLogin: Controller = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password)
            return res.status(401).json({error: 'Email and password are required'});
        const found = await api.users.findOne({email});
        if (!found)
            return res.status(400).json({error: "Wrong email or password!"});
        // match passwords
        if (!compareHash(password, found.password))
            return res.status(401).json({error: "Wrong email or password!"})
        res = setSignedAuthCookie(res, {userId: found.id, role: 'admin'})
        res.status(200).json({
            message: "Welcome back!",
            auth: jwt.sign({loggedIn: true}, process.env.COOKIE_SECRET ?? "1234", {expiresIn: '6h'})
        })
    } catch (err) {
        handleError(res, err)
    }
}

