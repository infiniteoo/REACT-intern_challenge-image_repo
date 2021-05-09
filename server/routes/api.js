const express = require('express')
/* import express from 'express' */
const router = express.Router()
const upload = require('../services/image-upload')
/* import upload from '../services/image-upload' */


const singleUpload = upload.single("image");
/* import { getAllImages, postImage, deleteImage, login } from "../controllers/api" */
const { getAllImages, postImage, deleteImage, login } = require("../controllers/api")




router.get("/", getAllImages)
router.post("/image-upload", singleUpload, postImage)
router.delete("/delete/:id", deleteImage)
router.get("/login/:email/:password", login)




module.exports = router;


