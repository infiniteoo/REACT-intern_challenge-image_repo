import imgModel from "../models/images";
const upload = require("../services/image-upload");
const singleUpload = upload.single("image");

export function getAllImages(req, res) {
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred: ", err);
    } else {
      res.send(items);
    }
  });
}

export const postImage = (req, res, next) => {

  


  

  singleUpload(req, res, function (err) {

   
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }],
      });
    }

    imgModel.create(
        {
          name: req.body.name,
          desc: req.body.desc,
          imgURL: req.file.location
          
        },
        {},
        (error, success) => {
          if (error) {
            console.log(error);
          } else {
            console.log(success);
          }
        }
      );

    // create new imgModel db item with req.body.name, req.body.desc, and req.file.location

    return res.json({ imageUrl: req.file.location });
  });

 

 

  

  
};
