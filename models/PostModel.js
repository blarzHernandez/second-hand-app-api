import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
  price: {
    type: Number,
    required: true,
  },
  postImages: {
    type: Array,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
  },
  userId: {
    type: String,
    required: true,
  },
  location: {
    type: Array,
    required: true,
  },
  feedback: {
    type: Array,
  },
  views: {
    type: Number,
  },
  isAvailable: {
    type: Boolean,
  },
  productStatus: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model('Post', postSchema);
export default Post;
