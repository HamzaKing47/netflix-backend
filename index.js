import express from 'express';
import fs from 'fs';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import videoRoutes from './routes/video.js';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve Swagger UI manually
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Your API routes
app.use('/api', videoRoutes);

// Serve static files (Swagger UI needs this)
app.use(express.static(path.join(__dirname, 'public')));

// Vercel doesn't need to listen to a port in serverless mode
const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
