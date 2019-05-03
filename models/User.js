const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/*
* Default _id
* Firebase ID: string
* Email: string
* Avatar: string
*/
const UserSchema = new Schema({
  // hash this
  firebase_id: {
    type: String,
    required: true
  },
  // hash this
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true,
    default: 'default'
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };