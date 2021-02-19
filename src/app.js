import express from "express";
import TaskRoutes from "./routes/task.routes";
import cors from 'cors';
import morgan from 'morgan';
//Initializations
const app = express(); 

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
const corsOptions = {}
app.use(cors(corsOptions));

//Routes
app.get('/' , (req,res) =>{
    res.json({message: 'Welcome to my app'})
})

app.use('/api/tasks',TaskRoutes);

export default app