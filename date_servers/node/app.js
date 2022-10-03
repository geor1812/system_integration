import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import timestampRouter from './routers/timestampRouter.js';

const PORT = 8080;
const SWAGGER_OPTIONS = {
   definition: {
      openapi: '3.0.0',
      info: {
         title: 'Timestamp API',
         version: '0.2.1',
      },
   },
   apis: ['./routers/*.js'],
};

const app = express();

const openAPISpecification = swaggerJSDoc(SWAGGER_OPTIONS);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(openAPISpecification));

app.use(timestampRouter);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
