import "./MainPage.css";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Overview from "./subpages/Overview/Overview";
import Playlist from "./subpages/Playlist/Playlist";
import { BrowserRouter as Router, Route, Link, Routes, useRoutes } from "react-router-dom";
import { ItemType } from "rc-menu/lib/interface";
import Player from "../../components/Player";
const MainPage = () => {
  

  return (
    <div className="App">
      <div className="App-top">
        <div className="App-left" style={{ border: "1px solid black" }}>
          <Menu mode="vertical" theme="dark" style={{ height: "100%"}} >
            <Menu.Item key="1">
                <Link to="/">Overview</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/playlist">Playlist</Link>
            </Menu.Item>
            </Menu>
        </div>
        <main className="App-main">
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/playlist" element={<Playlist />} />
            </Routes>           
        </main>
      </div>
      

      <div className="App-bottom">
        <Player />
      </div>
    </div>
  );
};

export default MainPage;
