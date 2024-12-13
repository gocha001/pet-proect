import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const goitApi = axios.create({
  // baseURL: "https://connections-api.goit.global/",
  baseURL: "https://nodejs-hw-mongodb-6-wfdy.onrender.com",
});

const setAuthHeader = (token: string): void => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register: any = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login: any = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await goitApi.post("/users/logout");
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk(
  "refresh",
  async (_, { getState, rejectWithValue }) => {
    const savedToken = (getState() as RootState).auth.token;
    if (!savedToken) {
      return rejectWithValue("Token does not exist!");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await goitApi.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
