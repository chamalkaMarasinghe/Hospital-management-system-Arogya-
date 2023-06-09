const express =require("express")
const router = express.Router()
const {insertEmp, updateEmp,getEmp,deleteEmp, getSpecificCategory} =require("../controllers/Employee")
router.post("/insert",insertEmp)
router.put("/update/:EmpId",updateEmp)
router.get("/getEmp",getEmp)
router.get("/getSpecificCategory/:category", getSpecificCategory)
router.delete("/delete/:EmpId",deleteEmp)


module.exports = router