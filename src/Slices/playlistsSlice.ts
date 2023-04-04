import { Playlist } from "../types/Playlist";
import { Title, TitleWithoutId } from "../types/Title";
import { generateGradient } from "../helpers/helperFunctions";
import data from "../static/data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const rawTitles = data.map((title: any) => {
  return {
    ...title,
    id: v4(),
  };
}) as Title[];




const generatePlaylistsByYear = (): Playlist[] => {
  const playlists: Playlist[] = [];
  const years = Array.from(new Set(rawTitles.map((title) => title.year)));
  for (const year of years) {
    const titlesOfYear = rawTitles.filter((title) => title.year === year);
    const limitedTitlesOfYear = titlesOfYear.slice(0, 50);
    const playlist: Playlist = {
      id: v4(),
      gradient: generateGradient(),
      name: `Top 50 ${year}`,
      titles: limitedTitlesOfYear,
    };
    playlists.push(playlist);
  }
  return playlists;
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState: generatePlaylistsByYear(),
  reducers: {
    addPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.push(action.payload);
    },
  },
});

export const { addPlaylist } = playlistsSlice.actions;
export default playlistsSlice.reducer;
