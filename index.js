import express from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
const PORT = 4000;

app.use(cors('*'));

app.get('/', (req, res) => {
  res.status(200).json({ result: uuid() });
});

app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});