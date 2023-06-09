const express = require("express")
const router = express.Router()
const { insertWard, updateWard, deleteWard, getWards } = require("../controllers/ward")

router.post("/insert", insertWard)
router.put("/update/:wardID", updateWard)
router.delete("/delete/:wardID", deleteWard)
router.get("/getAll", getWards)

module.exports = router