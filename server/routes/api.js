const express = require("express")
const router = express.Router()

import { slash } from "../controllers/api"

router.get("/", slash)


module.exports = router
