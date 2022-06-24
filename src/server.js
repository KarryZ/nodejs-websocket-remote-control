import WebSocket, { WebSocketServer } from 'ws';
import 'dotenv/config';
import { commandWithParams, switchCommands } from './controller/comandsController.js';


export const startWebsocket = () => {
        const PORT = process.env.PORT || 8080;
        console.log('WebSocketServer is running on port', PORT);

        const server = new WebSocketServer({ port: +PORT });
        
        server.on('connection', (ws, req) => {
                //console.log(req.rawHeaders);
                ws.on('message', (data) => {
                const command = commandWithParams(data.toString());
                console.log(`${command}`);
                let commandResult = switchCommands();
                ws.send(`${commandResult}`)
                });
        });       
                
        process.on('SIGINT', () =>  server.close() )
};

startWebsocket();

