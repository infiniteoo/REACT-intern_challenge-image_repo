import { isValidObjectId } from "mongoose";
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

export function deleteImage(req, res) {

    let ObjectId = require('mongodb').ObjectID

    console.log(req.params.id)

  imgModel.deleteOne({"_id" : ObjectId(req.params.id)}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred: ", err);
    } else {
      
      console.log(items)
      res.json({message: "it was successful"})
    }
  });
}

export const postImage = (req, res, next) => {

 
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
