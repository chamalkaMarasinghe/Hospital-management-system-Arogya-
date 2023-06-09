const express = require("express")
const router = express.Router()
const { insertpaitentinfor, updatepaitentinfor, deletepaitentinfor, getpaitentinfor } = require("../controllers/paitentinfor")

router.post("/insert", insertpaitentinfor)
router.put("/update/:wardID", updatepaitentinfor)
router.delete("/delete/:wardID", deletepaitentinfor)
router.get("/getAll", getpaitentinfor)

module.exports = router