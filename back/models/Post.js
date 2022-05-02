const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    content: String,
    images: {
      type: [{ data: Buffer, contentType: String, filename: String }],
      default: undefined,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

postSchema.index({
  title: 'text',
  description: 'text',
  category: 'text',
  content: 'text',
});

module.exports = mongoose.model('Post', postSchema);
