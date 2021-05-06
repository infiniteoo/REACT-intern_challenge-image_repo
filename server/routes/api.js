import express from 'express'
const router = express.Router()
import multer from 'multer'
import { getAllImages, postImage } from "../controllers/api"
import fs from 'fs'
import path from 'path'
import imgModel from '../models/images'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

let upload = multer({ storage: storage });



router.get("/", getAllImages)
router.post('/', upload.single('image'), (req, res, next) => {
  
    console.log(process.cwd())
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.json(item);
        }
    });
});

module.exports = router
