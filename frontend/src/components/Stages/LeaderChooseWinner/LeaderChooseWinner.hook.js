import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { roundEnd } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useLeaderChooseWinner = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.game.round);

  const [mainCard, setMainCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);
  const [isWinnerCard, setIsWinnerCard] = useState(false);
  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    if (!players.length) {
      socket.emit("getPlayers");
    }

    return () => {
      socket.off("getPlayers");
    };
  }, [players]);

  useEffect(() => {
    socket.on("sendPlayers", (data) => {
      setPlayers(data);
    });

    socket.on("sendMainCard2", (data) => {
      setMainCard(data);
    });

    socket.on("sendCards", (data) => {
      if (data.includes(null)) {
        return;
      } else {
        setCards(data);
      }
    });

    return () => {
      socket.off("sendPlayers");
      socket.off("sendMainCard2");
      socket.off("sendCards");
    };
  }, []);

  useEffect(() => {
    if (!mainCard) {
      socket.emit("getMainCard", { round });
    }

    if (!cards.length || cards.includes(null)) {
      socket.emit("getCards", { round });
    }

    if (cardId) {
      socket.emit("setWinnerCard", {
        round,
        cardId: cardId.id,
      });
    }

    return () => {
      socket.off("getMainCard");
      socket.off("getCards");
      socket.off("setWinnerCard");
    };
  });

  const setWinnerCard = (data) => {
    if (!cardId) {
      setCardId(data);
    }

    if (!isWinnerCard) {
      setIsWinnerCard(true);
    }
  };

  const startRoundEnd = () => {
    dispatch(roundEnd());
  };

  return {
    mainCard,
    cards,
    setWinnerCard,
    startRoundEnd,
    players,
    isWinnerCard,
  };
};

export default useLeaderChooseWinner;
