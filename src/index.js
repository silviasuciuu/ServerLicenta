import WebSocket from 'ws';
import http from 'http';
import { router as sportRouter } from './sport';
import { router as antrenorRouter } from './antrenor';
import { router as antrenor_clientRouter } from './antrenor_client';
import { router as antrenor_sporturiRouter } from './antrenor_sporturi';
import { router as clientRouter } from './client';
import { router as authRouter } from './auth';
import { router as greutateRouter } from './greutate';
import { router as mesajRouter } from './mesaj';
import { router as parereRouter } from './parere';
import { router as transformareRouter } from './transformare';
import { router as signUpClientRouter } from './sign-up-client';
import { router as signUpAntrenorRouter } from './sign-up-antrenor';

import express from "express";
import * as bodyParser from "body-parser";
import {initWss} from "./utils";

var cors = require('cors')
var app = express()

app.use(cors())

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
initWss(wss);
const port = 3000;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use('/sport', sportRouter);
app.use('/signup-client', signUpClientRouter);
app.use('/signup-antrenor', signUpAntrenorRouter);

app.use('/antrenor', antrenorRouter);
app.use('/antrenor_client', antrenor_clientRouter);
app.use('/antrenor_sporturi', antrenor_sporturiRouter);
app.use('/auth', authRouter);
app.use('/client', clientRouter);
app.use('/greutate',greutateRouter);
app.use('/mesaj', mesajRouter);
app.use('/parere', parereRouter);
app.use('/transformare', transformareRouter);
server.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})