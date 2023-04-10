import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

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
        app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();