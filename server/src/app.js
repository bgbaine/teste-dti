import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to teste-dti API');
});
