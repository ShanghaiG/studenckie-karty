import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: "START",
  answerCards: [],
  answerCardsLoading: false,
  mainCard: null,
  mainCards: [],
  mainCardsLoading: false,
  player: null,
  players: [],
  playerLoading: false,
  selectedCardId: null,
  round: 0,
  code: "",
};

export const fetchAnswersCard = createAsyncThunk(
  "game/fetchAnswersCard",
  async () => {
    return await fetch("http://localhost:8001/api/cards/answers")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
);

export const fetchMainCard = createAsyncThunk(
  "game/fetchMainCard",
  async () => {
    return await fetch("http://localhost:8001/api/cards/main")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
);

export const fetchAvailableUser = createAsyncThunk(
  "game/fetchAvailableUser",
  async () => {
    return await fetch("http://localhost:8001/api/users/get-available")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
);

export const preloadAvailableUser = () => async (dispatch) => {
  const user = await dispatch(fetchAvailableUser());
  console.log("user w startGame", user.payload);
  dispatch(addPlayer(user.payload));
};

export const rebuildGame = () => async (dispatch) => {
  dispatch(setStage("START"));
};

export const startGame = (code) => async (dispatch) => {
  await dispatch(fetchAnswersCard());
  await dispatch(fetchMainCard());

  dispatch(setStage("WAITING"));
};

export const roundOne = () => async (dispatch) => {
  dispatch(setStage("ROUND"));
};

export const leaderChooseCard = () => async (dispatch) => {
  dispatch(setStage("LEADER_CHOOSE_CARD"));
};

export const leaderChooseWinner = () => async (dispatch) => {
  dispatch(setStage("LEADER_CHOOSE_WINNER"));
};

export const roundEnd = () => async (dispatch) => {
  dispatch(setStage("ROUND_END"));
};

/*
 * Methods here are separated due to problems with rerendering/reloading
 * hooks and components.
 */
export const roundStart = () => async (dispatch) => {
  dispatch(setRound(1));
  dispatch(setStage("ROUND_START"));
};

export const roundTwo = () => async (dispatch) => {
  dispatch(setRound(2));
  dispatch(setStage("ROUND_START"));
};

export const gameEnd = () => async (dispatch) => {
  dispatch(setStage("GAME_END"));
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    },
    addPlayer: (state, action) => {
      state.player = action.payload;
    },
    setRound: (state, action) => {
      state.round = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnswersCard.pending, (state) => {
        state.answerCardsLoading = true;
      })
      .addCase(fetchAnswersCard.fulfilled, (state, action) => {
        state.answerCardsLoading = false;
        state.answerCards = action.payload;
      })
      .addCase(fetchMainCard.pending, (state) => {
        state.mainCardsLoading = true;
      })
      .addCase(fetchMainCard.fulfilled, (state, action) => {
        state.mainCardsLoading = false;
        state.mainCards = action.payload;
      })
      .addCase(fetchAvailableUser.pending, (state) => {
        state.playerLoading = true;
      })
      .addCase(fetchAvailableUser.fulfilled, (state, action) => {
        state.playerLoading = false;
        state.player = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setStage, addPlayer, setCode, setRound } = gameSlice.actions;

export default gameSlice.reducer;
