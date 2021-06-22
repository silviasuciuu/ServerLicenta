import WebSocket from "ws";
import jwt from "jsonwebtoken";
import {jwtConfig} from "./constants";

let wss;
export const initWss = value => {
    wss = value;

    wss.on('connection', ws => {
        ws.on('message', message => {
            const {type, payload: {id}} = JSON.parse(message);
            if (type !== 'authorization') {
                ws.close();
                return;
            }
            try {
                ws.user = id;
                console.log('id', ws.user, 'id')

            } catch (err) {
                ws.close();
            }
        })
    });
};


export const broadcast = (userId, data) => {
    if (!wss) {
        return;
    }
    console.log(wss.clients)
    wss.clients.forEach(client => {
        console.log('size ', client.user, ' size',userId,'sizeee',wss.clients.size,client.readyState)
        if (client.readyState ==1 && userId == client.user) {
            console.log(`broadcast sent to ${client.user}`);
            client.send(JSON.stringify(data));
        }
    });
};
