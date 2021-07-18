import WebSocket from 'ws';
import http from 'http';
import { router as sportRouter } from './sport';
import { router as antrenorRouter } from './antrenor';
import { router as antrenor_sporturiRouter } from './antrenor_sporturi';
import { router as clientRouter } from './client';
import { router as authRouter } from './auth';
import { router as greutateRouter } from './greutate';
import { router as transformareRouter } from './transformare';
import { router as signUpClientRouter } from './sign-up-client';
import { router as signUpAntrenorRouter } from './sign-up-antrenor';

import express from "express";
import * as bodyParser from "body-parser";

var cors = require('cors')
var app = express()

app.use(cors())

const server = http.createServer(app);

const port = 3000;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use('/sport', sportRouter);
app.use('/signup-client', signUpClientRouter);
app.use('/signup-antrenor', signUpAntrenorRouter);

app.use('/antrenor', antrenorRouter);
app.use('/auth', authRouter);
app.use('/client', clientRouter);
app.use('/greutate',greutateRouter);
app.use('/antrenor_sporturi',antrenor_sporturiRouter);

app.use('/transformare', transformareRouter);
server.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})