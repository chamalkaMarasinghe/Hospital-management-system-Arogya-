const express = require('express')
const router = express.Router()
const { getAllPhysicalAsset, insertPhysicalAsset, getOneAsset, updatePhysicalAsset, deletePhysicalAsset, insertDamagedPhysicalAsset, getAllDamagedPhysicalAsset, deleteDamagedPhysicalAsset, restoreDamagedPhysicalAsset, physicalAssetLiveSearch, damagedPhysicalAssetLiveSearch, generateReport, generateDamagedReport} = require('../controllers/physicalAsset')

router.get('/allPhysicalAssets', getAllPhysicalAsset)
router.get('/allDamagedPhysicalAssets', getAllDamagedPhysicalAsset)
router.get('/getOne/:assetId', getOneAsset)
router.get('/physicalAssetLiveSearch/:searchString', physicalAssetLiveSearch)
router.get('/damagedPhysicalAssetLiveSearch/:searchString', damagedPhysicalAssetLiveSearch)
router.get('/generatePhysicalAssetReport', generateReport)
router.get('/generateDamagedReport', generateDamagedReport)
router.post('/insertPhysicalAsset', insertPhysicalAsset)
router.post('/insertDamagedPhysicalAssets/:assetId' , insertDamagedPhysicalAsset)
router.put('/updatePhysicalAsset/:assetId', updatePhysicalAsset)
router.delete('/deletePhysicalAsset/:assetId', deletePhysicalAsset)
router.delete('/deleteDamagedPhysicalAsset/:assetId', deleteDamagedPhysicalAsset)
router.post('/restoreDamagedPhysicalAsset/:assetId', restoreDamagedPhysicalAsset)

module.exports = router