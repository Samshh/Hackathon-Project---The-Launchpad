import cors from 'cors';
import express from 'express';

import ExceptionHandler from './app/Exceptions/Handler';
import { routes } from './start/routes';

export function CreateServer() {
  const app = express();
  const cookieParser = require('cookie-parser');

  // Configure CORS
  app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
  }));

  app.use(express.json({ limit: '1.5mb' }));
  app.use(ExceptionHandler);
  app.use(cookieParser());
  app.use(routes);

  // Guard routes
  app.use((request, response) => {
    response.status(404);
    return response.json({
      status: 0,
      message: 'Route not found!',
    });
  });

  return app.listen();
}