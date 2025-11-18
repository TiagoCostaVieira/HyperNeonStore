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