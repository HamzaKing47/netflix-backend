// models/video.js
const videoSchema = {
  public_id: String,
  url: String,
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
};
