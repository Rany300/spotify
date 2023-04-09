import "./Overview.css";
import { useSelector } from "react-redux";
import PlayListPreview from "../../components/PlayListPreview";
import { Playlist } from "../../types/Playlist";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  const playlists = useSelector((state: RootState) => state.playlists);
  const topPlaylists = playlists.filter(
    (playlist: Playlist) => playlist.type === "top"
  );
  const personalPlaylists = playlists.filter(
    (playlist: Playlist) => playlist.type === "personal"
  );

  console.log(playlists);
  return (
    <div className="overview">
      <section className="personal-section">
        <h1>Your playlists</h1>
        <div className="list">
          {personalPlaylists.map((playlist: Playlist) => {
            return (
              <PlayListPreview
                playlist={playlist}
                size="m"
                gradient={playlist.gradient}
                clickAction={() => navigate(`/playlist/${playlist.id}`)}
              />
            );
          })}
        </div>
      </section>

      <section className="top-section">
        <h1>Top 50</h1>
        <div className="list">
          {topPlaylists.map((playlist: Playlist) => {
            return (
              <PlayListPreview
                playlist={playlist}
                size="l"
                gradient={playlist.gradient}
                subtitle={playlist.titles[0].year.toString()}
                clickAction={() => navigate(`/playlist/${playlist.id}`)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Overview;
