import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { AppDataSource } from './database';

import './shared/container';

AppDataSource.initialize();
const app = express();

app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(3000);
