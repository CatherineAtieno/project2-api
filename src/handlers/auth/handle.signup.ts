import {Controller} from "../../libs/types";
import {basicError, handleError, hashString, setSignedAuthCookie} from "../../libs/methods";
import {api} from "../../index";


export const handleAdminSignup: Controller = async (req, res, next) => {
    try {
        // check for all required fields
        const {userName, password, email, confirm} = req.body;
        if (!userName || !password || !email || !confirm)
            return res.status(400).json({message: "All fields are required!"})
        // passwords match
        if (password.trim() !== confirm.trim())
            return res.status(400).json({message: "Passwords do not match!"})
        // check user exists
        const found = await api.admins.findOne({$or: [{email}, {userName}]})
        if (found)
            return res.status(400).json({error: "User already exists! If its your please try logging in."})
        // not found
        req.body.password = hashString(password)
        const newAdmin = api.admins.create({...req.body})
        await api.em.persistAndFlush(newAdmin)
            .then(() => {
                res = setSignedAuthCookie(res, {userId: newAdmin.id, role: "admin"})
                res.status(200).json({
                    message: "Successfully registered"
                })
            })
    } catch (err) {
        handleError(res, err)
    }
}

export const handleUserSignup: Controller = async (req, res) => {
    try {
        console.log(req.body)
        const {firstName, lastName, password, email, role, confirm} = req.body;
        if (!firstName || !lastName || !password || !email || !role || !confirm)
            return basicError(res, "All fields are required")
        // verify user doesn't exist
        const found = await api.users.findOne({email})
        if (found)
            return res.status(401).json({error: 'User already exists!'})
        // confirm
        if (password.trim() !== confirm.trim())
            return res.status(400).json({message: "Passwords do not match!"})
        req.body.password = hashString(password)
        const newUser = api.users.create({...req.body})
        await api.em.persistAndFlush(newUser)
            .then(() => {
                res = setSignedAuthCookie(res, {userId: newUser.id, role: newUser.role})
                res.status(200).json({
                    message: "Successfully registered",
                    user: {
                        userName: newUser.firstName,
                        id: newUser.id
                    }
                })
            })
    } catch
        (err) {
        handleError(res, err)
    }
}

