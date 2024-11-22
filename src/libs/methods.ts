import express from "express";
import bcrypt from "bcryptjs"

export const getRandomString = (length: number = 6) => {
    const possibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    let output = ""
    for (let i = 0; i < length; i++)
        output += possibilities.charAt(Math.floor(Math.random() * possibilities.length))
    return output;
}

export const handleError = (res: express.Response, err: Error | unknown | string, status: number = 500) => {
    console.log("Error: ", err)
    if (err instanceof String)
        return res.status(status).send({error: err})
    res.status(status).send({error: "Sorry, something went wrong"})
}

export const hashString = (target: string) => {
    if (!target)
        throw new Error("Invalid string to be encrypted!")
    const salt = bcrypt.genSaltSync(15)
    return bcrypt.hashSync(target, salt)
}

export const compareHash = (text: string, hash: string) => {
    return bcrypt.compareSync(text, hash)
}

export const basicError = (res: express.Response, error: string, status: number = 400) => {
    res.status(status).json({error}).end()
}

export const setSignedAuthCookie = (res: express.Response, token: {
    userId: string,
    role: 'admin' | 'business' | 'tourist' | 'resident'
}) => {
    // const encoded = jwt.sign(token, process.env.COOKIE_SECRET, {})
    return res.cookie('access', token, {signed: true, maxAge: (12 * 60 * 60 * 1000), httpOnly: true, sameSite: true})
}
export const setUnsignedAuthCookie = (res: express.Response, token: { loggedIn: boolean, timestamp: Date }) => {
    res.set('authorization', `${{loggedIn: true}}`.toString())
    return res.cookie('auth', token, {signed: false, secure: false, maxAge: (12 * 60 * 60 * 1000), httpOnly: false})
}


