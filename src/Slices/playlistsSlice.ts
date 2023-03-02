import { Playlist } from "../types/Playlist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const playlistsSlice = createSlice({
    name: 'playlists',
    initialState: [] as Playlist[],
    reducers: {
        addPlaylist: (state, action: PayloadAction<Playlist>) => {
            state.push(action.payload);
        }
    }
});

export const { addPlaylist } = playlistsSlice.actions;
export default playlistsSlice.reducer;