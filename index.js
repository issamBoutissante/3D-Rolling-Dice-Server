const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});
let PORT = process.env.PORT || "5000";

io.on("connection", (socket) => {
  console.log("connection started");
  socket.on("diceClicked", () => {
    console.log("dice clicked");
    let Random_num = Math.floor(Math.random() * 5);
    io.emit("rollDice", { Random_num });
  });
});

server.listen(PORT, () => {
  console.log("the server started listening at the port " + PORT);
});
