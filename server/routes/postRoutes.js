import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../models/postModel.js';

dotenv.config();

const router = express.Router();