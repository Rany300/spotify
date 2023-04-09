import "./MainPage.css";
import type { MenuProps } from "antd";
import { Menu, Modal, Input } from "antd";
import { rawTitles } from "../../Slices/playlistsSlice";
import Overview from "../Overview/Overview";
import PlaylistPage from "../Playlist/PlaylistPage";
import PlayListCover from "../../components/PlayListCover";
import { generateGradient } from "../../helpers/helperFunctions";
import { v4 } from "uuid";
import { addPlaylist } from "../../Slices/playlistsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Playlist } from "../../types/Playlist";
import { RootState } from "../../store";
import { HeartFilled } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Player from "../../components/Player";
import { useRef, useState } from "react";
const MainPage = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state: RootState) => state.playlists);

  const getFeaturedPlaylists: Playlist[] = playlists.filter(
    (playlist: Playlist) => playlist.featured
  );

  const featuredMenuItems: MenuProps["items"] = getFeaturedPlaylists.map(
    (playlist: Playlist) => {
      return {
        key: playlist.id,
        title: playlist.name,
        icon: (
          <Link to={`/playlist/${playlist.id}`}>
            {playlist.isFavorites ? (
              <PlayListCover
              style={{height: "20px", width: "20px", marginRight: "10px"}}
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
    }
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
    };

    dispatch(addPlaylist(newPlaylist));
  };

  const [player, setPlayer] = useState(
    <Player
      title={rawTitles[0]}
      cover={
        <PlayListCover
          name={rawTitles[0].title}
          gradient={generateGradient()}
        />
      }
    />
  );

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
            style={{ backgroundColor: "black" , marginTop: "20px"}}
            items={items}
            defaultSelectedKeys={["1"]}
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
            <Route path="/playlist/:id" element={<PlaylistPage />} />
          </Routes>
        </main>
      </div>

      <div className="App-bottom">{player}</div>
    </div>
  );
};

export default MainPage;
