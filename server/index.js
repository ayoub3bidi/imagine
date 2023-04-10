import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();