import { configureStore } from "@reduxjs/toolkit";
import playlistsReducer from "./Slices/playlistsSlice";

export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
