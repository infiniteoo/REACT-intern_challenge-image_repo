import mongoose from 'mongoose'


const imageSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        max: 160,
        required: true
    },
    
    desc: {
        type: String
    },

    imgURL: {
      type: String
    },

    user: {
        type: String,
        default: 'Admin'
    }

}, { timestamps: true })

module.exports = mongoose.model('Image', imageSchema)