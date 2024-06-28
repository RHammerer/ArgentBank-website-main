import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
    },
    getInfoUser: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { logoutUser, getInfoUser } = userSlice.actions;

export default userSlice.reducer;
