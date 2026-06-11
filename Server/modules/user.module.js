const mongoose = require("mongoose");
const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minlingth: [3, "name lingth must be greater than 3 chars"],
  },
  email: {
    type: String,
    required: [true,'email is required'],
    unique: [true,'this email is already used '],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password:{
    type: String,
    required: [true, "name is required"],
    minlingth: [6, "password lingth must be liss than 15 chars"],
    maxlinght:[14, "password lingth must be liss than 15 chars"]
  }
},{timestamps:true});

module.exports = mongoose.model('User' ,userShema)
