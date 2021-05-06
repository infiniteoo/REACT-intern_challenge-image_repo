import multer from 'multer'
import imgModel from '../models/images'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })


export function getAllImages(req, res) {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err)
            res.status(500).send("An error occurred: ", err)
        } else {
            res.json(items)
        }
    })
}