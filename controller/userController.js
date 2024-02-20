const bcrypt = require("bcrypt");
const saltRounds = 10; // Number of salt rounds for bcrypt
const User = require("../model/userModel");
const { getToken } = require("../utils/jwtToken");

exports.postData = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      fullname,
      email,
      password: hash,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Signup failed",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully signed up",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.postLogin = async (req, res,) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log('User:', user);
    
        if (!user) {
            console.log('User not found');
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
    
        const isValid = await bcrypt.compare(password, user.password);
    
        if (!isValid) {
            console.log('Invalid credentials');
            return res.status(404).json({
                success: false,
                message: "Invalid credentials",
            });
        }
    
        
        req.user = user;
        getToken(req, res);
    
    
    
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
    
};
