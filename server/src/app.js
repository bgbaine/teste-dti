import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import cors from 'cors';


dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;
const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to teste-dti API');
});
