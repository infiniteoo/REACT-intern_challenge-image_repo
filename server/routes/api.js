const express = require("express")
const router = express.Router()

import { upload, getListFiles, download } from '../controllers/file.controller'


import { slash } from "../controllers/api"

router.get("/", slash)
router.post("/upload", upload)
router.get("/files:name", download)
router.get("/files", getListFiles)

module.exports = router
