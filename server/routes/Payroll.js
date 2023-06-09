const express = require("express")
const router = express.Router()
const{insertDet,updateDet,getDet,deletedet} = require("../controllers/Payroll")

router.post("/insert",insertDet)
router.put("/update/:empID",updateDet)
router.get("/getDet",getDet)
router.delete("/delete/:empID",deletedet)

module.exports = router