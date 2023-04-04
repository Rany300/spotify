import "./MainPage.css";
import type { MenuProps } from "antd";
import { Menu, Modal, Input } from "antd";
import { rawTitles } from "../../Slices/playlistsSlice";
import Overview from "../Overview/Overview";
import PlaylistPage from "../Playlist/PlaylistPage";
import PlayListCover from "../../components/PlayListCover";
import { generateGradient } from "../../helpers/helperFunctions";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useRoutes,
} from "react-router-dom";
import { ItemType } from "rc-menu/lib/interface";
import Player from "../../components/Player";
import { useState } from "react";
const MainPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [player, setPlayer] = useState(
    <Player
      title={rawTitles[0]}
      cover={<PlayListCover  name={rawTitles[0].title} gradient={generateGradient()} />}
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
            style={{ height: "20px", width: "20px" }}
          />{" "}
          Home
        </Link>
      ),
    },
    {
      key: "2",
      title: "Create Playlist",
      icon: (
        <div onClick={() => setModalVisible(true)}>
          <img
            src="/svg/plus.svg"
            alt="create"
            style={{ height: "20px", width: "20px" }}
          />
          Create Playlist
        </div>
      ),
    },
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
            style={{ backgroundColor: "black" }}
            items={items}
            defaultSelectedKeys={["1"]}
          />
        </div>
        <Modal
          title="Create Playlist"
          open={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}>
          <Input placeholder="Playlist Name" />
        </Modal>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
          </Routes>
        </main>
      </div>

      <div className="App-bottom">
        {player}
      </div>
    </div>
  );
};

export default MainPage;
