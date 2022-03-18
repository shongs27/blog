const mongoose = require('mongoose');
const { post } = require('../routes/user');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      text: true,
    },
    title: String,
    description: String,
    category: String,
    content: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
PostSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Post', PostSchema);
