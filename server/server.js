import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

// import routes
const apiRoutes = require('./routes/api')

// initialize the express server
const app = express();

// implement middlewear
app.use(cors())
app.use(morgan('dev'))

// route middlewear
app.use('/api', apiRoutes)


// define the server port
const port = process.env.PORT || 8000;

// launch the server
app.listen(port, () => {
    console.log(`🚀 🌎 Shopify™ Server LIVE at http://localhost:${port} 🚀 🌎 `);
});
