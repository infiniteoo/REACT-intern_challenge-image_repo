
const imgModel = require('../models/images');
/* import imgModel from "../models/images"; */
const userModel = require('../models/user');
/* import userModel from '../models/user'; */
const upload = require('../services/image-upload')
/* import upload from "../services/image-upload"; */
const { v4: uuidv4 } = require('uuid');
/* import { v4 as uuidv4 } from 'uuid'; */

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
  let ObjectId = require("mongodb").ObjectID;

  console.log(req.params.id);

  imgModel.deleteOne({ _id: ObjectId(req.params.id) }, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred: ", err);
    } else {
      console.log(items);
      res.json({ message: "it was successful" });
    }
  });
}

export const postImage = (req, res, next) => {

  const userToSend = req.body.user || "Guest" + uuidv4()

  imgModel.create(
    {
      name: req.body.name,
      desc: req.body.desc,
      imgURL: req.file.location,
      user: userToSend
    },

    (error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
        res.json("success");
      }
    }
  );
};


export const login = (req, res) => {

  

 
  

  // check for user's email address in system

  console.log(req.params.email, req.params.password)

  userModel.find({email: req.params.email}, (err, docs) => {
    if (err) {
      console.log(err)
    } else {
      console.log('docs',docs)
      console.log(req.params.password, docs[0].password)
      
      
      req.params.password === docs[0].password ? res.json(docs[0]) : res.json("DENIED!")
      
    }
  })

  // if we find it, compare the send password to what's in the DB


  


}