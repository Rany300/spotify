import { Playlist } from "../types/Playlist";
import { Title, TitleWithoutId } from "../types/Title";
import { generateGradient } from "../helpers/helperFunctions";
import data from "../static/data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import PlayListCover from "../components/PlayListCover";
import { HeartFilled } from "@ant-design/icons";

export const rawTitles = data.map((title: any) => {
  return {
    ...title,
    id: v4(),
  };
}) as Title[];

const generatePersonalPlaylists = (): Playlist[] => {
  const playlists: Playlist[] = [];
  const names: string[] = [
    "Liked Songs",
    "FAV",
    "Daily Mix 1",
    "Discover Weekly",
    "Malayalam",
    "Dance/Electro Mix",
    "EDM/Popular",
  ];
  for (const name of names) {
    const playlist: Playlist = {
      id: v4(),
      gradient: generateGradient(),
      name,
      titles: [],
      isFavorites: name === "Liked Songs",
      type: "personal",
      featured: true,
    };
    // Get 50 random titles for each playlist
    const selectedTitles: Title[] = [];
    for (let i = 0; i < 50; i++) {
      let randomTitle: Title;
      do {
        const randomIndex = Math.floor(Math.random() * rawTitles.length);
        randomTitle = rawTitles[randomIndex];
      } while (selectedTitles.find((title) => title.id === randomTitle.id));
      playlist.titles.push(randomTitle);
      selectedTitles.push(randomTitle);
    }

    playlists.push(playlist);
  }
  return playlists;
};


const generateTopPlaylists = (): Playlist[] => {
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
      type: "top",
    };
    playlists.push(playlist);
  }
  return playlists;
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState: [...generatePersonalPlaylists(), ...generateTopPlaylists()],
  reducers: {
    addPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.push(action.payload);
    },
    toggleToPlaylist: (state, action: PayloadAction<{ title: Title; playlist: Playlist }>) => {
      const { title, playlist } = action.payload;
      const index = playlist.titles.findIndex((t) => t.id === title.id);
      const newTitles = index === -1 
        ? [...playlist.titles, title]
        : playlist.titles.filter((t) => t.id !== title.id);
      const updatedPlaylist = { ...playlist, titles: newTitles };
      return state.map((p) => (p.id === updatedPlaylist.id ? updatedPlaylist : p));
    }    
  },
});

export const { addPlaylist, toggleToPlaylist } = playlistsSlice.actions;
export default playlistsSlice.reducer;
