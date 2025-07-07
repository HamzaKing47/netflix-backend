import express from 'express';
import upload from '../middlewares/multer.js';
import { uploadVideo } from '../controllers/videoController.js';

const router = express.Router();

/**
 * @swagger
 * /api/upload-video:
 *   post:
 *     summary: Upload a video to Cloudinary
 *     tags: [Video Upload]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               video:
 *                 type: string
 *                 format: binary
 *                 description: Video file to upload
 *     responses:
 *       201:
 *         description: Video uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   example: "https://res.cloudinary.com/.../video.mp4"
 *                 public_id:
 *                   type: string
 *                   example: "videos/sample_video"
 *       400:
 *         description: No video file provided
 *       500:
 *         description: Internal server error
 */
router.post('/upload-video', upload.single('video'), uploadVideo);

export default router;
