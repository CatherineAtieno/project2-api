import {Router} from "express";
import {handleGetBusinesses} from "../handlers/open/handle.GetBusinesses";
import {handleWriteReview} from "../handlers/app/handleWriteReview";
import {authMiddleware} from "../middleware/auth.middleware";


const sharedRouter = Router();

sharedRouter
    .get('/businesses/:kind?', handleGetBusinesses)
    .post("/write-review", authMiddleware, handleWriteReview)

export default sharedRouter;

