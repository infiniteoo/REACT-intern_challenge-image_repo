import express from 'express'
import router from 'express/router'

import { getAllImages, postImage } from "../controllers/api"

router.get("/", getAllImages)
router.post("/", upload.single('image'), postImage)

module.exports = router
