// /** @format */

// const SocketEmitter = require("@emitters/socket.emitter");
// const socketAuthentication = require("@middleware/socket-authentication.middleware");

// const User = require("@models/user.model");

// const { useSocketServer } = require("socket-controllers");

// const Server = require("socket.io");

// module.exports = (httpServer) => {
//   const options =  {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST", "PUT"]
//     },
//   };

//  const io = Server(httpServer, options);

//  io.on("connection", (socket) => {

//  })

//   return io;
//   //   const options = {
//   //     cors: {
//   //       origin: WEBAPP_URL,
//   //       methods: ["GET", "POST"],
//   //     },
//   //   };

//   //   const io = require("socket.io")(httpServer, options);

//   //   io.use(socketAuthentication);

//   //   io.on("connection", (socket) => {
//   //     socket.on("join", (data) => {
//   //       if (!data.room) return;

//   //       socket.join(data.room, async () => {
//   //         SocketEmitter.emit("ping-room", { room: data.room });

//   //         await User.setOnline(socket.userID, true);
//   //       });
//   //     });

//   //     socket.on("leave", (data) => {
//   //       if (!data.room) return;

//   //       socket.leave(data.room, async () => {
//   //         await User.setOnline(socket.userID, false);
//   //       });
//   //     });

//   //     socket.on("ping-frontend", (msg) => {
//   //       console.log("client sends some tasty test data, ping", msg);

//   //       io.emit("ping-backend", msg);
//   //     });

//   //     socket.on("disconnect", async () => {
//   //       await User.setOnline(socket.userID, false);
//   //     });
//   //   });

//   //   SocketEmitter.on("ping-backend", () => {
//   //     io.emit("ping-backend");
//   //   });

//   //   SocketEmitter.on("ping-room", (data) => {
//   //     if (!data.room) return;

//   //     io.to(data.room).emit("some event");
//   //   });
// };
