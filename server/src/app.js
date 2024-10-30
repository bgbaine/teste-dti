import express from 'express';
import router from './routes/index.js';
import cors from 'cors';


const app = express();
const port = 3001;
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:5176',
    'http://localhost:5177',
    'http://localhost:5178',
    'http://localhost:5179',
  ],
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
