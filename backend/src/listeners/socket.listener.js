const { Server } = require("socket.io");
const UserModel = require("@models/user.model");
const checkPlayers = require("../services/users/check-players");
const {
  updateActive,
  findUser,
  updateWinnerPlayer,
  cleanUp,
  updatePlayer,
  updatePoints,
} = require("../services/users");
const {
  updateGame,
  findMain,
  findGame,
  findAnswers,
  updateWinner,
  findWinners,
} = require("../services/game");
const { findMainCard } = require("../services/cards");

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
        await updateActive(data.player.id);
      } else {
        console.log("All players have joined");
      }
    });

    socket.on("getPlayers", async (data) => {
      const users = await UserModel.findAll();
      io.emit("sendPlayers", users);
    });

    socket.on("updateMainCard", async (data) => {
      await updateGame(data.user_id, data.round, {
        main_card_id: data.main_card,
      });

      const foundCard = await findMainCard(data.main_card);

      io.emit("sendMainCard", foundCard);
    });

    socket.on("updateAnswerCard", async (data) => {
      await updateGame(data.user_id, data.round, {
        answer_card_id: data.answer_card,
      });
    });

    socket.on("getMainCard", async (data) => {
      const card = await findMain(data.round);

      const foundCard = await findMainCard(card?.mainCardId);

      socket.emit("sendMainCard2", foundCard);
    });

    socket.on("getCards", async (data) => {
      const game = await findAnswers(data.round);

      socket.emit("sendCards", game);
    });

    socket.on("setWinnerCard", async (data) => {
      await updateWinner(data.round, data.cardId);
    });

    socket.on("getWinnerCard", async (data) => {
      const cards = await findWinners(data.round);

      socket.emit("sendWinnerCards", cards);
    });

    socket.on("getPlayer", async (player) => {
      const user = await findUser(player?.id);
      socket.emit("sendPlayer", user);
    });

    socket.on("updatePlayer", async (data) => {
      await updatePlayer(data?.player?.id, {
        has_answered: data.answer,
      });
    });

    socket.on("clearPlayers", async () => {
      await cleanUp();
    });

    socket.on("updateWinnerPlayer", async (data) => {
      const user = await updateWinnerPlayer(data.round);

      socket.emit("sendUpdateWinnerPlayer", user);
    });

    socket.on("updatePoints", async (data) => {
      if (data) {
        await updatePoints(data.id);
        socket.emit("sendUpdatePoints");
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
};
