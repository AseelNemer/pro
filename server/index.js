import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'
const app =express();


app.use(bodyParser.json({limit: "20mb" , extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb" , extended:true}));

app.use(cors());
app.use('/students', studentRoutes);


const connectio_url="mongodb+srv://skillsbuildt:1234@cluster0.uohms5u.mongodb.net/?retryWrites=true&w=majority";

const port=process.env.port || 5000;


mongoose.connect(connectio_url, {
    useNewUrlParser :true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=> app.listen(port, () =>
console.log(`connection is established and running on port: ${port}`)
)).catch((err) => console.log(err.message));


mongoose.set('useFindAndModify',false);