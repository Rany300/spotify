import "./PlayListCover.css";

type PlayListCoverProps = {
  name?: string;
  gradient: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
};

const PlayListCover = (props: PlayListCoverProps) => {
  const getContent = () => {
    if (props.icon) {
      return <div className="playlist_cover_icon">{props.icon}</div>;
    } else if (props.name) {
      return <div className="playlist_cover_name">{props.name}</div>;
    }
  };

  return (
    <div className="playlist_cover" style={{ background: props.gradient, ...props.style }}>
      {getContent()}
    </div>
  );
};

export default PlayListCover;
