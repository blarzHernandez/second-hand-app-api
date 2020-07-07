import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  postId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Message = mongoose.Model('Message', messageSchema);

export default Message;
