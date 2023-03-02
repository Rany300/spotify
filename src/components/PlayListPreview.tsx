import type { Playlist } from "../types/Playlist";

export interface PlayListPreviewProps {
    name: string;
    subtitle: string;
    playlist: Playlist;
}


const PlayListPreview = (props: PlayListPreviewProps) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.playlist.name}</p>
        </div>
    );
};
