import express from "express"
import videoRoutes from './routes/video.js';
import 'dotenv/config'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

const app = express();
app.use(express.json());

app.use("/api", videoRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));