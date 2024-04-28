const express=require("express");
const router=express.Router()

const Collegecontroller=require('../controller/collegecontroller')

router.post('/addCOLLEGE',Collegecontroller.addcollege)
router.get('/getCOLLEGE',Collegecontroller.getcollege)
router.get('/getcollegebyid/:id',Collegecontroller.getcollegebyid)
router.put('/putCOLLEGE/:id',Collegecontroller.updatecollege)
router.delete('/deleteCOLLEGE/:id',Collegecontroller.deletecollege)

module.exports = router; 