import {io} from "socket.io-client"
import readline from 'readline'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const socket = io("ws://localhost:3000")

socket.on("connected",async (args)=>{
  try {
    console.log(args)
  } catch (e) {
    console.error("Unable to prompt", e);
  }
  });

  while(true){
    socket.on("chat-message",args=>{
      console.log("broadcasted args "+args)
    })
    const message = await prompt("please enter your message:")
    socket.emit("chat-message",message)
    const quit = await prompt("enter q if you want to quit:")
    if(quit === "q"){
      rl.close();
      break
    }

    console.log("thread is not blocked")   
}



