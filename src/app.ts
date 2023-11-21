import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parse requests of content-type - application/json
app.use(express.json());
// cross-origin resource sharing
app.use(cors());

// npx eslint src --fix
app.get('/', function (req: Request, res: Response, next: NextFunction) {
  const b = 50;
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

export default app;
