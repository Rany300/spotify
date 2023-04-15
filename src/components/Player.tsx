import type { Title } from "../types/Title";
import "./Player.css";
import { getDurationInMinutes } from "../helpers/helperFunctions";
import React from "react";
import { HeartFilled } from "@ant-design/icons";

const { forwardRef, useImperativeHandle } = React;

const Player = forwardRef((props, ref) => {
  const [currentSong, setCurrentSong] = React.useState<Title | null>(null);
  const [currentCover, setCurrentCover] =
    React.useState<React.ReactNode | null>(null);

  useImperativeHandle(ref, () => ({
    setSong(song: Title) {
      setCurrentSong(song);
    },
    setCover(cover: React.ReactNode) {
      setCurrentCover(cover);
    },
  }));

  return (
    <div className="player">
      <div className="player_left">
        <div className="player_left_content">
          <div
            className="player_cover"
            style={{ width: "70px", height: "70px", overflow: "hidden" }}>
            {currentCover || null}
          </div>
          <div
            className="player_title"
            style={{
              fontFamily: "DM Sans",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <div
              className="player_title_name"
              style={{ fontSize: "18px", color: "white" }}>
              {currentSong?.title || "No title"}
            </div>
            <div
              className="player_title_artist"
              style={{ fontSize: "15px", color: "#B3B3B3" }}>
              {currentSong?.artist || "No artist"}
            </div>
          </div>
          <HeartFilled
            style={{ alignSelf: "center", marginLeft: "5px", color: "#1DB954" }}
          />
        </div>
      </div>
      <div className="player_center">
        <div className="player_center_top">
          <img src="/svg/shuffle.svg" alt="" />

          <img src="/svg/back.svg" alt="" />

          <img src="/svg/play.svg" alt="" />

          <img src="/svg/forward.svg" alt="" />

          <img src="/svg/rewind.svg" alt="" />
        </div>
        <div className="player_center_bottom">
          <span>0:00</span>
          <span className="player_bar" />
          <span>{getDurationInMinutes(currentSong?.duration ?? 0)}</span>
        </div>
      </div>
      <div className="player_right">
        <div className="player_right_content">
          <img src="/svg/microphone.svg" alt="" />
          <img src="/svg/list.svg" alt="" />
          <img src="/svg/screen.svg" alt="" />
          <img src="/svg/volume.svg" alt="" />
          <div className="player__controls_row" />
          <img src="/svg/resize.svg" alt="" />
        </div>
      </div>
    </div>
  );
});

export default Player;
