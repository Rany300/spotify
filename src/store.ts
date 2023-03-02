import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from './Slices/playlistsSlice';


export default configureStore({
    reducer: {
        playlists: playlistsReducer,
    },
});
