import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth.slice";
import userSlice from "./reducers/userReducer";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});
