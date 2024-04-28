const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const JobSchema = new Schema(
    {
        jobTitle : {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        jobRequirements : {
            type: String,
            required: true,
        },
        salaryPackage: {
            type: String,
            required: true,
        },
        jobType : {
            type: String,
            required: true,
        },
        contactNumber : {
            type: String,
            required: true,
        },
        email : {
            type: String,
            required: true,
        },
        Qualification : {
            type: String,
            required: true,
        },
    });
    module.exports=mongoose.model("job",JobSchema)
