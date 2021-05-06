import express from 'express'
const router = express.Router()
import multer from 'multer'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })

import { getAllImages, postImage } from "../controllers/api"

router.get("/", getAllImages)
router.post("/", upload.single('image'), postImage)

module.exports = router
