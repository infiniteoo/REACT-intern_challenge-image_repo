import express from 'express'
const router = express.Router()
import upload from '../services/image-upload'


const singleUpload = upload.single("image");
import { getAllImages, postImage, deleteImage } from "../controllers/api"




router.get("/", getAllImages)
router.post("/image-upload", singleUpload, postImage)
router.delete("/delete/:id", deleteImage)





module.exports = router;


