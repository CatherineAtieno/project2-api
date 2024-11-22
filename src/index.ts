import * as http from "node:http";
import {EntityManager, EntityRepository, MikroORM, RequestContext} from "@mikro-orm/core";
import {AdminEntity} from "./database/entities/admin.entity";
import express from 'express'
import router from "./routers/index.router";
import dotenv from 'dotenv'
import {UserEntity} from "./database/entities/user.entity";
import cookieParser from "cookie-parser";
import cors from 'cors'
import {BusinessEntity} from "./database/entities/business.entity";
import {ImageEntity} from "./database/entities/image.entity";
import {ReviewEntity} from "./database/entities/review.entity";
import {TransportEntity} from "./database/entities/transport.entity";

dotenv.config()

export const api = {} as {
    server: http.Server,
    orm: MikroORM,
    em: EntityManager,
    admins: EntityRepository<AdminEntity>,
    users: EntityRepository<UserEntity>,
    business: EntityRepository<BusinessEntity>,
    images: EntityRepository<ImageEntity>,
    reviews: EntityRepository<ReviewEntity>,
    transport: EntityRepository<TransportEntity>
}

(async () => {
    api.orm = await MikroORM.init()
    api.em = api.orm.em
    api.admins = api.orm.em.getRepository(AdminEntity)
    api.users = api.orm.em.getRepository(UserEntity)
    api.business = api.orm.em.getRepository(BusinessEntity)
    api.images = api.orm.em.getRepository(ImageEntity)
    api.reviews = api.orm.em.getRepository(ReviewEntity)
    api.transport = api.orm.em.getRepository(TransportEntity)

    const application = express();
    //  set all the middleware here
    application.use(cors({
        origin: [
            'http://localhost:5173',
            'http://localhost:5174',
            //     TODO: Change this before deployment
        ],
        credentials: true,
    }))
    application.use(cookieParser(process.env.COOKIE_SECRET));
    application.use(express.json({limit: "100mb"}))
    application.use(express.urlencoded({extended: true, limit: '100mb'}))
    // no more middleware from here
    application.use((_req, _res, next) => {
        RequestContext.create(api.orm.em, next)
    })

    application.use("/api", router)

    api.server = application.listen(process.env.PORT || 5000, () => {
        console.log("\nAPPLICATION RUNNING ON PORT: " + process.env.PORT || 5000);
    });
})()

