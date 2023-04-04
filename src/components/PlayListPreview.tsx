import type { Playlist } from "../types/Playlist";
import "./PlayListPreview.css";
import PlayListCover from "./PlayListCover";

export interface PlayListPreviewProps {
  playlist: Playlist;
  size: "m" | "l";
  gradient: string;
  style?: React.CSSProperties;
  clickAction?: () => void;
}

const PlayListPreview = ({ playlist, size, gradient, style, clickAction }: PlayListPreviewProps) => {
  const getSmallPreview = (
    <div className="playlist-preview-small" style={style}  onClick={() => clickAction?.()}>
      <div className="playlist-preview-small-cover"></div>
      <div className="playlist-preview-small-info">
        <h1>{playlist.name}</h1>
      </div>
    </div>
  );

  const largePreview = (
    <div className="playlist-preview-large" style={style} onClick={() => clickAction?.()}>
      <div className="playlist-preview-large-cover">
      <PlayListCover gradient={gradient} name="My Playlist" rounded />
      </div>
      <div className="playlist-preview-large-info">
        <h1>{playlist.titles[0]?.year ?? ""}</h1>
        <h1>{playlist.name}</h1>
      </div>
    </div>
  );

  return {
    m: getSmallPreview,
    l: largePreview,
  }[size];
};

export default PlayListPreview;
