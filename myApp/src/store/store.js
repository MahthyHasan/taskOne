import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import characterReducer from "./characterSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    character: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["auth.user"], 
      },
    }),
});

export default store;
