const User = require("../models/User")

const register = async(req, res)=>{
    try {
        const user = await User.create(req.body)
        const token = user.createToken()
        res.cookie('token', token);
        res.status(201).json({user, token})
    } catch (err) {
        if (err.code === 11000) {
           return res.status(400).json({ email:  "email is already used"});
        }
       return res.status(400).json({ errors: err.message });
    }
    
}
const login =  async(req, res)=>{
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(500).json({email: "you must provide email ", password: "you must provide password "})
        }
        const user = await User.findOne({email})
        if (!user) {
            return  res.status(500).json({email: "email not found"})
        }
        const matchPassword = await user.comparePassword(password)
        if(!matchPassword){
            return res.status(500).json({password: "incorrect password"})
        }
        const token = user.createToken()
        res.cookie('token', token);
        res.status(201).json({user, token})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
        
   
}

module.exports = {
    register,
    login
}