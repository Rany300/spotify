import "./MainPage.css";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Overview from "./subpages/Overview/Overview";
import Playlist from "./subpages/Playlist/Playlist";
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
const MainPage = () => {
  const sampleCover = () => {
    return <PlayListCover name="My Playlist" gradient={generateGradient()} />;
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      title: "Home",
      icon: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      title: "Playlist",
      icon: <Link to="/playlist">Playlist</Link>,
    },
  ];

  return (
    <div className="App">
      <div className="App-top">
        <div className="App-left" style={{ backgroundColor: "black" }}>
        <img src="https://cdn.discordapp.com/attachments/1030200971441225750/1083422173529657415/image.png" alt="logo" style={{ height: "49px", margin: "auto", paddingTop: "10px", display: "block" }} />
          <Menu
            mode="vertical"
            theme="dark"
            style={{backgroundColor: "black" }}
            items={items}
            defaultSelectedKeys={["1"]}
          />
        </div>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        </main>
      </div>

      <div className="App-bottom">
        <Player
          title={{
            title: "Hey, Soul Sister",
            artist: "Train",
            genre: "neo mellow",
            year: 2010,
            duration: 217,
            popularity: 83,
          }}
          cover={sampleCover()}
        />
      </div>
    </div>
  );
};

export default MainPage;
