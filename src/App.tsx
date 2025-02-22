import { ConfigProvider } from "antd";
import type { MenuProps } from "antd";
import { Menu, Modal, Input } from "antd";
import Overview from "./pages/Overview/Overview";
import PlaylistPage from "./pages/Playlist/PlaylistPage";
import PlayListCover from "./components/PlayListCover";
import { generateGradient } from "./helpers/helperFunctions";
import { v4 } from "uuid";
import { addPlaylist } from "./Slices/playlistsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Playlist } from "./types/Playlist";
import { RootState } from "./store";
import { HeartFilled } from "@ant-design/icons";
import { Route, Link, Routes } from "react-router-dom";
import Player from "./components/Player";
import { useRef, useState } from "react";
import { Title } from "./types/Title";
import "./index.css";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const featuredPlaylists = useSelector((state: RootState) =>
    state.playlists.filter((playlist: Playlist) => playlist.featured)
  );

  const newPlaylistName = useRef<string>("");

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddPlaylist = (title: string) => {
    const newPlaylist: Playlist = {
      id: v4(),
      gradient: generateGradient(),
      name: title,
      titles: [],
      type: "personal",
      featured: true,
    };

    dispatch(addPlaylist(newPlaylist));
  };

  const playerRef = useRef(null);

  const selectTitle = (title: Title, gradient: string) => {
    const player: any = playerRef.current;
    if (player) {
      player.setSong(title);
      player.setCover(<PlayListCover gradient={gradient} name={title.title} />);
    }
  };

  const featuredMenuItems = featuredPlaylists.map((playlist: Playlist) => {
    return {
      key: playlist.id,
      title: playlist.name,
      icon: (
        <Link to={`/playlist/${playlist.id}`}>
          {playlist.isFavorites ? (
            <PlayListCover
              style={{ height: "20px", width: "20px", marginRight: "10px" }}
              icon={
                <PlayListCover
                  icon={
                    <HeartFilled
                      style={{
                        fontSize: "15px",
                      }}
                    />
                  }
                  gradient={playlist.gradient}
                />
              }
              gradient={playlist.gradient}
            />
          ) : null}
          {playlist.name}
        </Link>
      ),
    };
  });

  const items: MenuProps["items"] = [
    {
      key: "1",
      title: "Home",
      icon: (
        <Link to="/">
          <img
            src="/svg/house.svg"
            alt="home"
            style={{ height: "20px", width: "20px", marginRight: "10px" }}
          />
          Home
        </Link>
      ),
    },
    {
      key: "2",
      title: "Create Playlist",
      icon: (
        <div>
          <img
            src="/svg/plus.svg"
            alt="create"
            style={{ height: "20px", width: "20px", marginRight: "10px" }}
          />
          Create Playlist
        </div>
      ),
      onClick: () => setModalVisible(true),
    },
    ...featuredMenuItems,
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "white",
          colorTextSecondary: "white",
          colorTextPlaceholder: "white",
          colorTextDescription: "white",
          colorTextDisabled: "white",
          colorTextBase: "white",
          colorBgBase: "gray",
        },
      }}>
      <div className="App">
        <div className="App-top">
          <div className="App-left" style={{ backgroundColor: "black" }}>
            <img
              src="https://cdn.discordapp.com/attachments/1030200971441225750/1083422173529657415/image.png"
              alt="logo"
              style={{
                height: "49px",
                margin: "auto",
                paddingTop: "10px",
                display: "block",
              }}
            />
            <Menu
              mode="vertical"
              theme="dark"
              style={{ backgroundColor: "black", height: "85%" , marginTop: "20px", overflowY: "scroll" }}
              items={items}
            />
          </div>
          <Modal
            title="Create Playlist"
            open={modalVisible}
            onOk={() => {
              const title = newPlaylistName.current;
              if (title.trim().length > 0) {
                handleAddPlaylist(title);
                setModalVisible(false);
                newPlaylistName.current = "";
              }
            }}
            onCancel={() => setModalVisible(false)}>
            <Input
              placeholder="Playlist Name"
              onChange={(e) => (newPlaylistName.current = e.target.value)}
            />
          </Modal>
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route
                path="/playlist/:id"
                element={<PlaylistPage onSongClick={selectTitle} />}
              />
            </Routes>
          </main>
        </div>

        <div className="App-bottom">
          <Player ref={playerRef} />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
