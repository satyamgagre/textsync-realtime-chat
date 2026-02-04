import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: ["http://localhost:3000"],
        methods:["GET", "POST"]
    }
})

const useSocketMap = new Map();  // {userId: socketId}

io.on('connection',(socket) => {
    console.log("A user Connected",socket.id)

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") useSocketMap[userId] = socket.id;

    socket.on("disconnect",() =>{
        console.log("A user Disconnected", socket.id)
    })
})

export {app, io, server}