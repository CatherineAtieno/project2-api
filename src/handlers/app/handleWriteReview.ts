import {Controller} from "../../libs/types";
import {handleError} from "../../libs/methods";
import {api} from "../../index";


export const handleWriteReview: Controller = async (req, res) => {
    try {
        console.log(req.body)
        const {stars, review, business} = req.body;
        if (stars < 1)
            return res.status(400).json({error: "Please enter a valid rating"});
        const user = await api.users.findOne({id: req.user?.id})
        if (!user)
            return res.status(403).json({
                error: "Please login or signup to give a rating!"
            })
        const newReview = api.reviews.create({...req.body, user: user.id})
        await api.em.persistAndFlush(newReview)
            .then(() => {
                res.status(200).json({
                    message: "Thank you for your review!"
                })
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    error: "Sorry, something went wrong with your request, check your input and try again!"
                })
            })
    } catch (err) {
        handleError(res, err)
    }
}

