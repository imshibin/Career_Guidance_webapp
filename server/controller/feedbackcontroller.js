const Feedback = require("../model/feedback")
module.exports={
    addfeedback:async(req,res)=>{
        const {name,description }=req.body;
        try{
            const result=await Feedback.create({
                name,
                description,
            });
            res.status(200).json({result});
        }
            catch(err){
            res.status(400).json({err});
            }
        },
    getfeedback:async(req,res)=>{
            const id=req.params.id
            try {
                 const result2=await Feedback.find()
                 res.status(200).json({result2});
            }
            catch(err) {
                res.status(400).json({err});
                }
        
            
        },
       
    getfeedbackId:async(req,res)=>{
        const id=req.params.id
        try {
             const result3=await Feedback.findById(id)
             res.status(200).json({result3});
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        
    },
     updatefeedback:async(req,res)=>{
        const id=req.params.id
        try {
             await Feedback.findByIdAndUpdate(id,{
                Name:req.body.Name
             });
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        },
  deletefeedback:async(req,res)=>{
            const id=req.params.id
            try {
                 await Feedback.findByIdAndDelete(id)
                 res.status(200).json("success");
            }
            catch(err) {
                res.status(400).json({err});
                }
        
            }}

