const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const CourseSchema = new Schema(
{
    courseName : {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    courseFee:{
        type:String,
        required:true,
    },
    subjects:{
        type:String,
        required:true,
    },
        
}
);
const Collegeschema= new Schema(
    {
        collegeName : {
            type: String,
            required: true,
        },
        place: {
            type: String,
            required: true,
        },
        address:{
            type:String,
            required:true,
        },
        contactNumber:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        category:{
            type:String
        },
        courses:[CourseSchema]
    }
);

const College=mongoose.model("college",Collegeschema)
module.exports=College;