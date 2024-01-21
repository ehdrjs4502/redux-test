import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "userReducer",
  initialState: { value: { id: "", pw: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { id: "", pw: "" };
    },
  },
});

export const { login, logout } = user.actions;

export default user.reducer;
