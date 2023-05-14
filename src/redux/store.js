import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import themeReducer from "./features/theme/themeSlice";
import dataReducer from "./features/data/dataSlice";


export const store = configureStore({
  reducer: {
    auth : authReducer,
    theme : themeReducer,
    data : dataReducer
  },
});
