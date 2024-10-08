import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { Connect } from './utils/db';
import userRouter from './router/user'
import bookRouter from './router/book';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/users', userRouter); 
app.use('/book' , bookRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  Connect();
  console.log(`Server is Fire at http://localhost:${port}`);
});