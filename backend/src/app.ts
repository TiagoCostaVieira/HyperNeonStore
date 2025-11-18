<<<<<<< HEAD
<<<<<<< HEAD
import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const router = Router();

app.use(express.json());

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'express sucess' })
})

app.use(router)

app.listen(3333, () => 'server is runnig');
=======
=======
>>>>>>> eb097b449d1bef1a0433697f6db924f219e8d4ff
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { timeStamp } from 'console';
import {connectDb} from './config/database'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

//health check
app.get('/health', (req, res) => {
    res.status(200).json({
        status:'ok',
        message:'Cyberpunk API is running',
        timeStamp: new Date().toISOString()
    })
})

//basic route
app.get('/api', (req, res) =>{
    res.json({
        message:'Welcome to Cyberpunk Api',
        version: '1.0.0',
        endpoints: {
        auth: '/api/auth',
        users: '/api/users',
        health: '/health'
        }
    });
});

const startServer = async () => {
    try
    {
        await connectDb();
        app.listen(PORT, () =>{
        console.log(`🎮 Cyberpunk Backend running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
    
}

startServer();
<<<<<<< HEAD
>>>>>>> simulacao
=======
>>>>>>> eb097b449d1bef1a0433697f6db924f219e8d4ff
