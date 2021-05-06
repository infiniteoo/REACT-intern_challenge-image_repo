const express = require("express")
const router = express.Router()

import { getAllImages } from "../controllers/api"

router.get("/", getAllImages)


module.exports = router
