const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/*
* Default _id
* Firebase ID: string
* Email: string
* Avatar: string
*/
const UserSchema = new Schema({
  firebase_id: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    required: true,
    default: 'default'
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };