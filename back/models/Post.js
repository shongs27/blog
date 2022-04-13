const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    content: String,
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      text: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

postSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Post', postSchema);
