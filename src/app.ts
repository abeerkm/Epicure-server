import express from 'express';
import routes from './routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDb } from './db';
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
connectDb()
app.listen(3001, () => console.log("Listening on http://localhost:3001"));
