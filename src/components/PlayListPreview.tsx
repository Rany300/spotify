import type { Playlist } from "../types/Playlist";
import "./PlayListPreview.css";
import PlayListCover from "./PlayListCover";
import { HeartFilled } from "@ant-design/icons";

export interface PlayListPreviewProps {
  playlist: Playlist;
  subtitle?: string;
  size: "m" | "l";
  gradient: string;
  style?: React.CSSProperties;
  clickAction?: () => void;
}

const PlayListPreview = ({
  playlist,
  size,
  gradient,
  style,
  subtitle,
  clickAction,
}: PlayListPreviewProps) => {
  const getSmallPreview = (
    <div className="playlist-preview-small" style={style} onClick={() => clickAction?.()}>
      <div className="playlist-preview-small-cover">
        <PlayListCover
          gradient={gradient}
          style={{
            width: "100px",
            height: "100px",
            fontSize: "1.3em",
            borderRadius: "4px 0 0 4px",
          }}
          icon={playlist.isFavorites ? <HeartFilled /> : null}
        />
      </div>
      <div className="playlist-preview-small-info">
        <h1>{playlist.name}</h1>
      </div>
    </div>
  );

  const largePreview = (
    <div
      className="playlist-preview-large"
      style={style}
      onClick={() => clickAction?.()}>
      <div className="playlist-preview-large-cover">
        <PlayListCover
          gradient={gradient}
          name={playlist.name}
          style={{
            borderRadius: "10px",
            width: "191px",
            height: "191px",
            fontSize: "1.3em",
          }}
        />
      </div>
      <div className="playlist-preview-large-info">
        <h1 style={{ fontSize: "0.8em", marginTop: "60px" }}>
          {playlist.name}
        </h1>
        <h2
          style={{
            color: "gray",
            fontSize: "0.5em",
          }}>
          {subtitle}
        </h2>
      </div>
    </div>
  );

  return {
    m: getSmallPreview,
    l: largePreview,
  }[size];
};

export default PlayListPreview;
