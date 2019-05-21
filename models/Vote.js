const mongoose = require("mongoose");

const User = require('./User.js');
const Post = require('./Post.js');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

/*
* Default _id
* post_id: ObjectId (_id from 'Post')
* user_id: ObjectId (_id from 'User')
* vote: Number, -1/0/1
*/
const VoteSchema = new Schema({
  post_id: {
    type: ObjectId,
    required: true,
    ref: 'Post'
  },
  voter_id: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  vote: {
    type: Number,
    required: true,
    min: -1,
    max: 1,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

VoteSchema.index({ post_id: 1, voter_id: 1 }, { unique: true });

const Vote = mongoose.model('Vote', VoteSchema);

module.exports = { Vote };