import bodyParser from "body-parser";
import express, {Request, Response} from "express";
import {router} from './routes/itemsRouter'

const PORT = 5000;

const app = express();

app.use(bodyParser.json())

app.use('/api', router)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})