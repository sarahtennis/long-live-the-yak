const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/*
* Default _id
* Firebase ID: string
* Email: string, HASHED
* Avatar: string
*/
const UserSchema = new Schema({
  firebase_id: {
    type: String,
    required: true,
    unique: true
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
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', UserSchema);

module.exports = User;