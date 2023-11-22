import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/3_StudentRoute';
const app: Application = express();

// parse requests of content-type - application/json
app.use(express.json());
// cross-origin resource sharing
app.use(cors());

// application router
app.use('/api/v1/students', StudentRoutes);

// npx eslint src --fix
// controller
const getAController = (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
};
app.get('/', getAController);

export default app;
