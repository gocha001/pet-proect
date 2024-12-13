import { UserActiv, User } from "./../../components/App/App.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register, login, logout, refresh } from "./operations.ts";
import toast from "react-hot-toast";

const initialState: UserActiv = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<UserActiv>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(login.fulfilled, (state, action: PayloadAction<UserActiv>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(refresh.fulfilled, (state, action: PayloadAction<User>) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(register.rejected, () => {
        toast.error(`Incorrect data entered.`);
      })
      .addCase(login.rejected, () => {
        toast.error(`Incorrect data entered.`);
      });
  },
});

export const authReducer = slice.reducer;
