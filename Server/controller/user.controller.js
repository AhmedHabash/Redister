const User = require("../modules/user.module");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }
  const existingUser = await User.findOne({ email }); 
  if (existingUser) {
    return res.status(200).json({ message: "email already exists" });
  } 

  const newUser = await User.create(req.body);
  
  res.status(201).json({ message: "user is created", newUser });
};
const login = async(req,res) =>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user){
    return res.status(404).json({message:"user not found"});
  }
  if(user.password !== password){
    return res.status(401).json({message:"invalid password"});
  }
  res.status(200).json({message:"login successful",user});  
}

// const getUser = async(req,res)=>{
//   const user = await User.findOne({name:req.User.name});
//   if(!user){
//     return res.status(404).json({message:"user not found"});
//   }
//   res.status(200).json({message:"user found",user});
// }

module.exports = { createUser , login};
