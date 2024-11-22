import express from "express";
import {handleQuickOverview} from "../handlers/admin/handle.quickOverview";
import {handleAddBusiness} from "../handlers/admin/handle.AddBusiness";
import {handleDeleteBusiness} from "../handlers/admin/handle.DeleteBusiness";
import {cloudinaryMiddleware} from "../middleware/cloudinary.middleware";


const adminRouter = express.Router();

adminRouter
    .get("/quick-overview", handleQuickOverview)
    .get('/users', (_req, res)=>{
        res.cookie('auth', '1728', {secure: true, httpOnly: true});
        res.status(200).send([])
    })
    // .get('/hotels')
    // .get('/fun-places')
    //
    .post('/add-business', cloudinaryMiddleware, handleAddBusiness)
    .delete('/business/:id', handleDeleteBusiness)
    // .post('/create-user')
    // .post('/delete-user')
    // .post('/update-user')
    //
    // .post('create-place')

export default adminRouter;

