import {Controller} from "../../libs/types";
import {handleError} from "../../libs/methods";
import {api} from "../../index";


export const handleGetBusinesses: Controller = async (req, res) => {
    try {
        const param = req.params.kind
        if(!param) {
            // number of restaurants
            const places = await api.business.findAll({populate: ['images', 'services', 'transport', 'rating', 'reviews', 'reviews.user']})
            return res.status(200).send(places)
        }
        const specific = await api.business
            .findAll({where: {kind: param as ("restaurant" | "fun place" | "hotel")}, populate: ['images']})
        res.status(200).send(specific)
    }catch (err){
        handleError(res, err)
    }
}

