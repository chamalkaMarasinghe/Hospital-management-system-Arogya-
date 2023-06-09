const express  = require('express')
const router = express.Router()
const {
    getAllLaboratoryEquipments,
    getAllDamagedLaboratoryEquipments,
    getOneEquipmnet,
    insertLaboratoryEquipments,
    insertDamagedLaboratoryEquipments,
    restoreDamagedLaboratoryEquipments,
    updateLaboratoryEquipments,
    deleteLaboratoryEquipment,
    deleteDamagedLaboratoryEquipment,
    equipmentsLiveSearch,
    damagedEquipmentsLiveSearch,
    generateEquipmnetReport,
    generateDamagedEquipmnetReport
} = require('../controllers/laboratoryEquipments')

router.get('/getAllLaboratoryEquipments', getAllLaboratoryEquipments)
router.get('/getAllDamagedLaboratoryEquipments', getAllDamagedLaboratoryEquipments)
router.get('/getOneEquipmnet/:equipmenId', getOneEquipmnet)
router.get('/equipmentsLiveSearch/:searchString', equipmentsLiveSearch)
router.get('/damagedEquipmentsLiveSearch/:searchString', damagedEquipmentsLiveSearch)
router.get('/generateEquipmnetReport', generateEquipmnetReport)
router.get('/generateDamagedEquipmnetReport', generateDamagedEquipmnetReport)
router.post('/insertLaboratoryEquipments', insertLaboratoryEquipments)
router.post('/insertDamagedLaboratoryEquipments/:equipmentId',insertDamagedLaboratoryEquipments)
router.post('/restoreDamagedLaboratoryEquipments/:equipmentId', restoreDamagedLaboratoryEquipments)
router.put('/updateLaboratoryEquipments/:equipmentId', updateLaboratoryEquipments)
router.delete('/deleteLaboratoryEquipment/:equipmentId', deleteLaboratoryEquipment)
router.delete('/deleteDamagedLaboratoryEquipment/:equipmentId', deleteDamagedLaboratoryEquipment)

module.exports = router