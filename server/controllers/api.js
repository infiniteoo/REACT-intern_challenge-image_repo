import imgModel from "../models/images";

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
  const upload = require("../services/image-upload");
  const singleUpload = upload.single("image");
  
  singleUpload(req, res, function (err) {
    if (err) {
      return res
        .status(422)
        .send({
          errors: [{ title: "Image Upload Error", detail: err.message }],
        });
    }
    console.log("grats u made it this far");
    return res.json({ imageUrl: req.file.location });
  });
};
