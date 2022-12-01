import TodoView from './views/TodoView';

// const { Server } = require("socket.io");
// const socket = Server();
// import { WebSocketServer } from "ws";

function App() {
    return (
        <div className="App">
            <TodoView />
        </div>
  );
}

// const socket = new WebSocketServer();

// socket.on("connect", () => {
//     console.log("socket.on connect");
// });

// socket.on("disconnect", () => {
//     console.log("socket.on disconnect");
// });

// socket.on('pong', () => {
//     console.log("socket.on pong");
// });

export default App;

