import { Title } from "./Title"; 

export type PlaylistWithoutId = Omit<Playlist, "id">;

export type Playlist = {
    id: string;
    gradient: string;
    name: string;
    titles: Title[];
    isFavorites?: boolean;
    featured?: boolean;
    cover?: React.ReactNode;
    type: "personal" | "top";
}