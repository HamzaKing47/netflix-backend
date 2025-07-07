// middleware/multer.js
import multer from 'multer';
import path from 'path';

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (!['.mp4', '.mov', '.avi', '.mkv'].includes(ext)) {
    return cb(new Error('Only video files are allowed'), false);
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

export default upload;
