const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    content: String,
    image: {
      data: Buffer,
      contentType: String,
    },
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
