import mongoose from "mongoose";

const taoShem = new mongoose.Schema({
    ngalan: {
        type: String,
        required: true,
        unique: true,
            },
    tubag: {
        type: String,
        required: true,
      
            },
     mail: {
        type: String,
        required: true,
        unique: true,
            },
    una: {
        type: String,
        required: true,
        unique: true,
        },
    last: {
            type: String,
            required: true,
            },
    bday: {
        type: String,
        required: true,
        },
    Course: {
            type: String,
            required: true,
            },
    year: {
        type: String,
        required: true,
        },
    category: {
        type: String,
        required: true,
        },
    Status: {
        type: String,
        required: true,
        },
    gender: {
        type: String,
        required: true,
        },
    idnum: {
        type: String,
        required: true,
        unique: true,
        }, 
    pic: {
        type: String,
        required: true,
        },
    newtu: {
        type: String,
        required: true,
        },    
}, {timestamps:true });
const Tao = mongoose.model('Tao', taoShem);
export default Tao;