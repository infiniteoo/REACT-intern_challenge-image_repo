import imgModel from "../models/images";
import upload from '../services/image-upload'


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

  console.log('-------------------------')
  console.log(req.body)
  console.log('-------------------------')
  /* singleUpload(req, res, function (err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }],
      });
    }
    // create new imgModel db item with req.body.name, req.body.desc, and req.file.location 
     
   
  }); */

  imgModel.create(
    {
      name: req.body.name,
      desc: req.body.desc,
      imgURL: req.file.location,
    },
    
    (error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
        res.json('success')
      }
    }
  );
    

};
/* export const postImage = (req, res, next) => {

 
  singleUpload(req, res, function (err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }],
      });
    }
    // create new imgModel db item with req.body.name, req.body.desc, and req.file.location 
     
    imgModel.create(
      {
        name: req.body.name,
        desc: req.body.desc,
        imgURL: req.file.location,
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
  });
};
 */