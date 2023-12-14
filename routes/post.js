// postModel.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pintrest");


const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },

  image:{
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  user:{
    type :mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  likes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Post', postSchema);


