const College = require("../model/courseschema")
module.exports = {
    addcollege: async (req, res) => {
        const { collegeName, place, address, contactNumber, email, courses ,category} = req.body;
        try {
            const result = await College.create({
                collegeName,
                place,
                address,
                contactNumber,
                email,
                courses,
                category
            });
            res.status(200).json({ result });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },
    getcollege: async (req, res) => {
        const id = req.params.id
        try {
            const result2 = await College.find()
            res.status(200).json({ result2 });
        }
        catch (err) {
            res.status(400).json({ err });
        }


    },

    getcollegebyid: async (req, res) => {
        const id = req.params.id
        try {
            const result3 = await College.findById(id)
            res.status(200).json({ result3 });
        }
        catch (err) {
            res.status(400).json({ err });
        }


    },
    updatecollege: async (req, res) => {
        const id = req.params.id
        try {
            await College.findByIdAndUpdate(id, {
                Name: req.body.Name
            });
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    },
    deletecollege: async (req, res) => {
        const id = req.params.id
        try {
            await College.findByIdAndDelete(id)
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    }
}

