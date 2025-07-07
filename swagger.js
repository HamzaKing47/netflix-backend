// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Video Upload CRUD API',
      version: '1.0.0',
      description: 'API documentation for video upload and management using Cloudinary',
    },
    servers: [
      {
        url: 'http://127.0.0.1:8000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js', './controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec; 