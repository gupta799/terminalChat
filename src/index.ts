import {Server} from "socket.io"
const PORT = 3000
const io = new Server(PORT)
console.log(`application started on ${PORT}!`)

io.on("connection",(socket)=>{
    console.log('new user')
    
    
    socket.emit("connected","user is connected")
    socket.on("chat-message", message =>{
        console.log("chat-message",message + "args")
        socket.broadcast.emit("chat-message",message + "args")
    })
})