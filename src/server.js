import { WebSocketServer, createWebSocketStream  } from 'ws';
import 'dotenv/config';
import { commandWithParams, switchCommands } from './controller/comandsController.js';


export const startWebsocket = () => {
        const PORT = process.env.PORT || 8080;
        console.log('WebSocketServer is running on port', PORT);

        const server = new WebSocketServer({ port: +PORT });
        
        server.on('connection', (ws, req) => {
                console.log(req.rawHeaders);
                const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
                duplex.on('data', (data) => {
                        const command = commandWithParams(data.toString());
                        console.log(`${command}`);
                        let commandResult = switchCommands();
                        duplex.write(`${commandResult}`)
                });
        });       
                
        process.on('SIGINT', () =>  {
                server.close();
                console.log('WebSocketServer is stopped');
        })
};

startWebsocket();

