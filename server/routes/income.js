const express = require('express')
const router = express.Router()
const { insertIncome, calculateDailyIncome } = require("../controllers/income")

router.post("/insert", insertIncome)
router.get("/getDailyIncome", calculateDailyIncome)

module.exports = router