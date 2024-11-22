import {Controller} from "../../libs/types";
import {handleError} from "../../libs/methods";
import {BusinessEntity} from "../../database/entities/business.entity";
import {api} from "../../index";


export const handleAddBusiness: Controller = async (req, res) => {
    try {
        const {name, email, phone, kind, images, address, transport} = req.body as BusinessEntity;
        delete req.body.id
        Object.assign(req.body, {rating: 5})
        if (!name || !email || !phone || !kind || !address)
            return res.status(400).json({error: "Business name, location, email, phone and kind are required"});
        const newBusiness = api.business.create(req.body)

        if (images && Array.isArray(images) && images.length > 0) {
            for (const img of images) {
                const newImg = api.images.create({...img, place: newBusiness})
                newBusiness.images.add(newImg)
            }
        }
        console.log(req.body)
        if(transport && Array.isArray(transport)){
            for(const trans of transport){
                try{
                    const exists = api.transport.findOne({type: trans.type})
                    if(!exists){
                        const newTransport = api.transport.create({...trans, place: newBusiness.id})
                        console.log("trans: \n",newTransport)
                        newBusiness.transport.add(newTransport)
                    }
                } catch (err){
                    console.log("problem: ", err)
                }
            }
        }

        await api.em.persistAndFlush(newBusiness)
            .then(() => {
                res.status(200).json({
                    message: `${name} successfully added!`,
                })
            })
            .catch(err => {
                console.log("\nError: \n\t", err);
                res.status(400).json({error: `Sorry, something went wrong. Please check you input and try again!`})
            })
    } catch (err) {
        handleError(res, err)
    }
}

