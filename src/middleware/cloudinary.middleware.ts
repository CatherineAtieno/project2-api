import {Controller} from "../libs/types";
import cloud from 'cloudinary'
import {handleError} from "../libs/methods";
import dotenv from "dotenv";

dotenv.config();

const cloudinary = cloud.v2
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

const uploadBase64ToCloudinary = async (base64Image: string) => new Promise<{
    secure_url: string,
    public_id: string
}>(async (resolve, reject) => {
    try {
        await  cloudinary
            .uploader
            .upload(base64Image, {
                folder: 'cathy'
            })
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw new Error('Upload failed');
    }
})

export const cloudinaryMiddleware: Controller = async (req, res, next) => {
    try {
        const {images} = req.body as { images: string[] };
        const results = []
        for(const img of images){
            const result = await uploadBase64ToCloudinary(img)
            results.push({id: result.public_id, img: result.secure_url})
        }
        req.body.images = results
        next()
    } catch (err) {
        handleError(res, err)
    }
}

