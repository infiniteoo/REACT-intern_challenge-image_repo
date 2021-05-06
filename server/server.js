import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
var bodyParser = require('body-parser');

// import routes
import apiRoutes from './routes/api'

// initialize the express server
const app = express();
global.__basedir = __dirname;

// database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('database connected!'))
.catch(err => console.log(err))

// implement middlewear
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// route middlewear
app.use('/', apiRoutes)


// define the server port
const port = process.env.PORT || 8080;

// launch the server
app.listen(port, () => {
    console.log(`🚀 🌎 Shopify™ Server LIVE at http://localhost:${port} 🚀 🌎 `);
});
