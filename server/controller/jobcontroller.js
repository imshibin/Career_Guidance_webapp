const Job = require("../model/jobschema")
module.exports = {
    addjob: async (req, res) => {
        const { jobTitle, companyName, jobRequirements, salaryPackage,
            jobType, contactNumber, email, Qualification } = req.body;
        try {
            const result = await Job.create({
                jobTitle,
                companyName,
                jobRequirements,
                salaryPackage,
                jobType,
                contactNumber,
                email,
                Qualification
            });
            res.status(200).json({ result });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },
    getjob: async (req, res) => {
        const id = req.params.id
        try {
            const result = await Job.find()
            res.status(200).json({ result });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },

    getjobById: async (req, res) => {
        const id = req.params.id
        try {
            const result3 = await Job.findById(id)
            res.status(200).json({ result3 });
        }
        catch (err) {
            res.status(400).json({ err });
        }


    },
    updatejob: async (req, res) => {
        const id = req.params.id
        try {
            await Job.findByIdAndUpdate(id, {
                Name: req.body.Name
            });
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    },
    deletejob: async (req, res) => {
        const id = req.params.id
        try {
            await Job.findByIdAndDelete(id)
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    }
}

