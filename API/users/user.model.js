const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let User = new Schema({
  username: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required:true

  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);