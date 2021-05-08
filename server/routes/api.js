import express from 'express'
const router = express.Router()

import { getAllImages, postImage } from "../controllers/api"




router.get("/", getAllImages)
router.post("/image-upload", postImage)





module.exports = router;


