const express = require("express")
const router = express.Router()

import { upload, getListFiles, download } from '../controllers/file.controller'


import { slash } from "../controllers/api"

router.get("/", slash)
router.post("/upload", upload)
router.get("/files:folder", getListFiles)
router.get("/files", download)

module.exports = router
