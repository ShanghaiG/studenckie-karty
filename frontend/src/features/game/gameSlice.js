import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: "START",
  answerCards: [],
  answerCardsLoading: false,
  mainCards: [],
  mainCardsLoading: false,
  player: null,
  playerLoading: false,
  players: [],
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

export const startGame = (code) => async (dispatch) => {
  await dispatch(fetchAnswersCard());
  await dispatch(fetchMainCard());
  await dispatch(fetchAvailableUser());

  dispatch(addPlayer({ id: 1, firstName: "Axl", lastName: "Cruz" }));
  dispatch(setStage("WAITING"));
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
      state.players += state.players.concat(action.payload);
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
export const { setStage, addPlayer, setCode } = gameSlice.actions;

export default gameSlice.reducer;
