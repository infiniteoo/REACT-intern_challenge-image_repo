import mongoose from 'mongoose'


const imageSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        max: 160,
        required: true
    },
    
    description: {
        type: String
    },

    img: {
        data: Buffer,
        contentType: String
    },

    user: {
        type: String,
        default: 'Admin'
    }

}, { timestamps: true })

module.exports = mongoose.model('Image', imageSchema)