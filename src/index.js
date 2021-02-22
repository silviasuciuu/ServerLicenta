import WebSocket from 'ws';
import http from 'http';
import { router as sportRouter } from './sport';
import { router as antrenorRouter } from './antrenor';
import express from "express";
import antrenor from "./antrenor/antrenor";
import * as bodyParser from "body-parser";

const app= express();

const server = http.createServer(app);
const port = 3000;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use('/sport', sportRouter);
app.use('/antrenor', antrenorRouter);

server.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
