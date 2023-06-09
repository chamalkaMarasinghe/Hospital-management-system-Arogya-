const express =require("express")
const router = express.Router()
const {insertform} =require("../controllers/requestForm")
router.post("/insert",insertform)

module.exports =router;