const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load User model
const User = require("../model/userschema");
// Load input validation
const SignupValidation = require("../validator/signup");
const SigninValidation = require("../validator/signin");
const { log } = require("console");
module.exports = {
  //  ---------------------------------------- //signup method to add a new user//--------------------------- //

  signup: async (req, res) => {
    const { firstName,lastName,email,password,courseStudied} = req.body;
    
    const { errors, isValid } = SignupValidation(req.body);

    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        await User.findOne({ email }).then(async (exist) => {
          if (exist) {
            errors.email = "Email already in use";
            res.status(404).json(errors); 
          } else {
            const hashedpassword = bcrypt.hashSync(password, 8);
            const result = await User.create({
              firstName,
              lastName,
              email,
              password: hashedpassword,
              courseStudied: courseStudied,
              role : "user",
        
            });
            res.status(201).json({ message: "user added with success"});
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  //  ---------------------------------------- //signin method to add a new user//--------------------------- //
  signin: async (req, res) => {
    const { email, password } = req.body;
    const { errors, isValid } = SigninValidation(req.body);
    console.log(email,password);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        await User.findOne({ email }).then(async (user) => {
          if (!user) {
            errors.email =
              "Email does not exist ! please Enter the right Email or You can make account";
            res.status(404).json(errors);
          }
          // Compare sent in password with found user hashed password
          const passwordMatch = bcrypt.compareSync(password, user.password);
          if (!passwordMatch) {
            errors.password = "Wrong Password";
            res.status(404).json(errors);
          } else {
            // generating a token and storing it in a cookie
            const token = jwt.sign({ _id: user._id, role: user.role }, "sooraj_DOING_GOOD", {
              expiresIn: "8h",
            });
            const options = {
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
              httpOnly: true,
              sameSite: "lax",
            };

            const data = {
              id: user._id,
              role: user.role,
              courseStudied: user.courseStudied
            }
            // console.log(data);
            // res.cookie("Authorization", token, options);
            res.status(201).json({
              token,
              data
            });
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },


  verifyToken: async (req, res) => {
    try {
      const token = req.body.token;
      const decoded = jwt.verify(token, "sooraj_DOING_GOOD")
      res.status(200).json(decoded)

    } catch (error) {
      return res.status(401).json({
        message: 'Auth Failed'
      });
    }

  },

  getUser: async (req, res) => {
    const id = req.params.id;
    console.log(id, "id vanno");
    try {
      const data = await User.findById(id);
      res.status(200).json(data)

    } catch (error) {

    }
  }
}