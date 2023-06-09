const express = require("express")
const router = express.Router()
const{insertatt,getatt,deleteatt} = require("../controllers/Attendence")

router.post("/insert",insertatt)
router.get("/update",getatt)
router.delete("/delete/:empId",deleteatt)

module.exports =router