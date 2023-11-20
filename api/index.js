import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

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