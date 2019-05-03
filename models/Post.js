const mongoose = require("mongoose");

const User = require('./User.js');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

/*
* Default _id
* user_id: ObjectId from 'User' model
* body: string, required, limit 255 chars
* comments
* created_at
* updated_at
*/
const PostSchema = new Schema({
  user_id: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  // text content
  body: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  location: {
    lat: {
      type: Number,
      required: true,
      min: -90,
      max: 90
    },
    lon: {
      type: Number,
      required: true,
      min: -180,
      max: 180
    }
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post };