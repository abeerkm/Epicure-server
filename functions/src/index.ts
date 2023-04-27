import express=require("express");
import bodyParser =require("body-parser");
import cors =require ("cors");
import {connectDb} from "./db";
import routes from "./routes/index";
const app = express();
import functions=require("firebase-functions");

app.get("*/some-data", (request:Request, response:any)=>{
  response.send("server");
});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
connectDb();
exports.app = functions.https.onRequest(app);

