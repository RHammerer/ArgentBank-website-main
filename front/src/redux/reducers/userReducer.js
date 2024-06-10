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
      state.profile = null;
      state.isLoggedIn = false;
    },
    getInfoUser: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUserProfile.fulfilled, (state, action) => {
  //       state.profile = action.payload;
  //     })
  //     .addCase(fetchUserProfile.rejected, (state, action) => {
  //       state.error = action.error.message;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.error = action.error.message;
  //     });
  // },
});

export const { logoutUser, getInfoUser } = userSlice.actions;

export default userSlice.reducer;
