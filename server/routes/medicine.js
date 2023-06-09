const express = require('express')
const router = express.Router()
const { 
    getAllMedicine,
    getAllExpiredMedicine,
    getOneMedicine,
    insertMedicine,
    insertExpiredMedicine,
    updateMedicine,
    deleteMedicine,
    deleteExpiredMedicine,
    medicineLiveSearch,
    expiredMedicineLiveSearch,
    generateMedicineReport,
    generateExpiredMedicineReport
} = require('../controllers/medicine')

router.post('/insertMedicine' ,insertMedicine)
router.post('/insertExpiredMedicine/:medicineId', insertExpiredMedicine)
router.get('/getAllMedicine', getAllMedicine)
router.get('/getAllExpiredMedicine', getAllExpiredMedicine)
router.get('/getOneMedicine/:medicineId', getOneMedicine)
router.get('/medicineLiveSearch/:searchString', medicineLiveSearch)
router.get('/expiredMedicineLiveSearch/:searchString', expiredMedicineLiveSearch)
router.get('/generateMedicineReport', generateMedicineReport)
router.get('/generateExpiredMedicineReport', generateExpiredMedicineReport)
router.put('/updateMedicine/:medicineId', updateMedicine)
router.delete('/deleteMedicine/:medicineId', deleteMedicine)
router.delete('/deleteExpiredMedicine/:medicineId', deleteExpiredMedicine)

module.exports = router