const IncomeSchema = require('../models/income')
const mongoose = require('mongoose')

const insertIncome = async(req, res) => {
    try {
        const { id, date, description, amount } = req.body
        const initialIncome = await IncomeSchema.findOne({ id : id.toLowerCase() })
        if(initialIncome){
            initialIncome.date = new Date()
            initialIncome.description = description
            initialIncome.amount = amount
            var newBalance = parseFloat(initialIncome.amount) + parseFloat(initialIncome.balance)
            initialIncome.balance = newBalance.toString()
            await initialIncome.save()
            res.status(200).json({ 'msg' : "updated successfully", 'income' : initialIncome })
        }
        else{
            var balance = "0"
            const income = await IncomeSchema.create({ id : id.toLowerCase(), date : new Date(), description, amount, balance })
            res.status(200).json({ 'msg' : "created successfully", 'income' : income })
        }
    } catch (error) {
        res.status(500).json({ "msg" : error.message })
    }
}

const calculateDailyIncome = async(req, res) => {
    try {
        const currentDate = new Date()
        const yearCurrent = currentDate.getFullYear()
        const monthCurrent = currentDate.getMonth() + 1
        const dateCurrent = currentDate.getDate()
        let dailyIncome = 0.0

        const result = await IncomeSchema.find({})
        result.forEach(obj => {
            if(obj.date.getFullYear() == yearCurrent && obj.date.getMonth() + 1 == monthCurrent && obj.date.getDate() == dateCurrent){
                dailyIncome = dailyIncome + parseFloat(obj.balance)
                console.log(dailyIncome);
            }
        });

        res.status(200).json({ "daily income" : `${dailyIncome}` })

    } catch (error) {
        res.status(500).json({ "msg" : error.message })
    }
}

module.exports = { insertIncome, calculateDailyIncome }