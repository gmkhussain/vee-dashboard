import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.interface";

interface IUserState {
  token: string | null;
  user: {
    email: string;
    email_verified_at: string | null;
  };
}

const userInitialState = {
  token: null,
  user: {
    email: "",
    email_verified_at: null
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;

      state.user = {
        email: "",
        email_verified_at: null
      };
    },
    setUser(state, action) {
      state.user = action.payload;
    }
  }
});

export const { setToken, removeToken, setUser } = userSlice.actions;
export const getUser = (state: RootState): IUserState => state.user;
export default userSlice.reducer;
