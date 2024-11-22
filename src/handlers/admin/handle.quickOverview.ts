import {Controller} from "../../libs/types";
import {handleError} from "../../libs/methods";
import {api} from "../../index";


export const handleQuickOverview: Controller = async (req, res) => {
    try {
        // number of users
        const users = await api.users.findAll()
        // number of restaurants
        const restaurants = await api.business.findAll({where: {kind: 'restaurant'}})
        // number of hotels
        const hotels = await api.business.findAll({where: {kind: 'hotel'}})
        // number of website visits
        const funPlaces = await api.business.findAll({where: {kind: 'fun place'}})
        res.status(200).json({ users, restaurants, hotels, funPlaces })
    }catch (err){
        handleError(res, err)
    }
}
