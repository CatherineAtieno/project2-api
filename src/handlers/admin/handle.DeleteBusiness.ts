import {Controller} from "../../libs/types";
import {handleError} from "../../libs/methods";
import {api} from "../../index";


export const handleDeleteBusiness: Controller = async (req, res) => {
    try{
        const param = req.params['id'];
        if(!param)
            return res.status(400).json({message: "No id provided!"})
        const found = await api.business.findOne({id: param})
        if(!found)
            return res.status(404).json({message:"No business found."})
        await api.em.removeAndFlush(found)
            .then(()=>res.status(200).json({message:"Successfully removed!"}))
            .catch(err => {
                handleError(res, err)
            })
    }catch(err){
        handleError(res, err)
    }
}

