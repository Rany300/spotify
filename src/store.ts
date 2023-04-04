import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from './Slices/playlistsSlice';
import type { Playlist } from './types/Playlist';

interface AppState {
    playlists: Playlist[];
}

export const store = configureStore({
    reducer: {
        playlists: playlistsReducer,
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

