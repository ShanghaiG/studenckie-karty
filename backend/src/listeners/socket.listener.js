const { Server } = require("socket.io");
const UserModel = require("@models/user.model");

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected: ", socket.id);

    socket.on("joinRoom", async (data) => {
      socket.join(data.room);

      if (data.player?.id) {
        await UserModel.updateActive(data.player.id);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
};
