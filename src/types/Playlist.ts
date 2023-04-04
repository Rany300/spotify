import { Title } from "./Title"; 

export type PlaylistWithoutId = Omit<Playlist, "id">;

export type Playlist = {
    id: string;
    gradient: string;
    name: string;
    titles: Title[];
}