const express=require("express");
const router=express.Router()

const Feedbackcontroller=require('../controller/feedbackcontroller')

router.post('/addFEEDBACK',Feedbackcontroller.addfeedback)
router.get('/getFEEDBACK',Feedbackcontroller.getfeedback)
router.get('/getFEEDBACKID/:id',Feedbackcontroller.getfeedbackId)
router.put('/putFEEDBACK/:id',Feedbackcontroller.updatefeedback)
router.delete('/deleteFEEDBACK/:id',Feedbackcontroller.deletefeedback)

module.exports = router; 