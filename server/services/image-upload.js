const aws = require('aws-sdk')
const multer= require('multer');
const multerS3 = require('multer-s3')

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: 'us-west-2'
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG are allowed.'), false);
    }
}

const upload = multer({
    fileFilter,
    storage: multerS3({
        acl: 'public-read',
        s3,
        bucket: 'shopify-intern-challenge',
      /*   metadata: function (req, file, cb) {
            cb(null, Date.now().toString())
        } */
    })
})

module.exports = upload;