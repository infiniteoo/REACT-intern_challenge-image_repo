const express = require('express')
/* import express from 'express' */
const morgan = require('morgan')
/* import morgan from 'morgan' */
const cors = require('cors')
/* import cors from 'cors' */
const mongoose = require('mongoose')
/* import mongoose from 'mongoose' */
require('dotenv').config()
/* import 'dotenv/config' */
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


/* var whitelist = ['http://localhost:3000', 'http://localhost:8080']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

 */

/* app.use(cors) */
// implement middlewear
app.use(cors(), function(req, res, next) {
    res.header("*", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();

})
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
