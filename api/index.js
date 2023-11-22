import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose
    .connect(process.env.decept)
    .then (() => {
    console.log('Patch to Serv');
    })
    .catch((err) => {
        console.log(err);
    });



const app = express();
app.listen(3000, () => {
    console.log('NedaganNaServsaPantalan3k!!!');
    }  
);

app.get('/test', (req, res) => {
    res.json({
            message: 'helow',
    });
    }

);

app.use('/api/user', userRouter);