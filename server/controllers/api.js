import imgModel from '../models/images'
import multer from 'multer'





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


export const postImage = (req, res, next) => {
    console.log('../uploads/')
    let obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join('/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }

    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err)
        } else {
            // item.save();
           res.redirect('/')
        }
    })

}

