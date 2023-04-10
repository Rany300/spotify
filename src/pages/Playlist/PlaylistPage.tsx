import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Playlist } from "../../types/Playlist";
import { Input, Select, Table, Modal, MenuProps, List } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { getDurationInMinutes } from "../../helpers/helperFunctions";
import PlayListCover from "../../components/PlayListCover";
import { RootState } from "../../store";
import { toggleToPlaylist } from "../../Slices/playlistsSlice";
import { SearchOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { Title } from "../../types/Title";
import { useRef, useState } from "react";
import "./PlaylistPage.css";

type PlaylistPageProps = {
  onSongClick?: (title: Title, gradient: string) => void;
};

const PlaylistPage = ({ onSongClick }: PlaylistPageProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const selectedSong = useRef<Title | null>(null);

  const columns: ColumnsType<Title> = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => (
        <>
          {index + 1}{" "}
          {checkFavorite(record) ? (
            <HeartFilled
              onClick={() => handleAddToFavorite(record)}
              style={{ color: "green" }}
            />
          ) : (
            <HeartOutlined onClick={() => handleAddToFavorite(record)} />
          )}
        </>
      ),
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Popularity",
      dataIndex: "popularity",
      key: "popularity",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (text, record, index) => (
        <>{getDurationInMinutes(record.duration)}</>
      ),
    },
  ];

  const [order, setOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const id = useParams().id;
  const playlists = useSelector((state: RootState) => state.playlists);

  const personalPlaylists = playlists.filter(
    (playlist: Playlist) =>
      playlist.type === "personal" && !playlist.isFavorites
  );

  const handleAddToFavorite = (title: Title) => {
    let favoritePlaylist = playlists[0];
    console.log(favoritePlaylist);
    if (favoritePlaylist) {
      dispatch(toggleToPlaylist({ title: title, playlist: favoritePlaylist }));
    }
  };

  const checkFavorite = (title: Title) => {
    const isFavorite = playlists[0].titles.find(
      (favoriteTitle: Title) => favoriteTitle.id === title.id
    );
    return isFavorite ? true : false;
  };

  console.log(playlists[0].id);

  const playlist = playlists.find((playlist: Playlist) => playlist.id === id);

  if (!playlist) return <div className="playlist-page">Playlist not found</div>;

  if (!id) return <div className="playlist-page">Playlist not found</div>;

  const filteredTitles = playlist?.titles.filter((title: Title) =>
    title.title?.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="playlist-page">
      <div
        className="playlist-page-header"
        style={{ background: playlist.gradient }}>
        <div className="playlist-page-header-cover">
          {playlist.isFavorites ? (
            <PlayListCover
              gradient={playlist.gradient}
              style={{ borderRadius: "10px" }}
              icon={<HeartFilled style={{ fontSize: "5em" }} />}
            />
          ) : (
            <PlayListCover
              gradient={playlist.gradient}
              style={{ borderRadius: "10px" }}
            />
          )}
        </div>
        <div className="playlist-page-header-title">{playlist.name}</div>
      </div>
      <div className="playlist-page-content">
        <div className="playlist-page-content-controls">
          <Input.Search
            size="middle"
            placeholder="Artists, Songs or Podcasts"
            prefix={<SearchOutlined />}
            className="playlist-page-search"
            style={{ width: 300, borderRadius: 20 }}
            onSearch={(value) => setSearchQuery(value)}
          />
          <Select
            defaultValue="Custom Order"
            style={{ width: 120 }}
            onChange={(value) => setOrder(value)}
            options={[
              { value: "Custom Order", label: "Custom Order" },
              { value: "Popularity", label: "Popularity" },
              { value: "Duration", label: "Duration" },
              { value: "Year", label: "Year" },
              { value: "Genre", label: "Genre" },
              { value: "Title", label: "Title" },
            ]}
          />
        </div>
        <Modal
          open={menuVisible}
          footer={null}
          closable={false}
          className="playlist-page-modal"
          title="Add to playlist"
          onCancel={() => setMenuVisible(false)}>
          <List
            dataSource={personalPlaylists}
            renderItem={(playlist: Playlist) => (
              <List.Item>
                <div
                  onClick={() => {
                    if (selectedSong.current) {
                      dispatch(
                        toggleToPlaylist({
                          title: selectedSong.current,
                          playlist,
                        })
                      );
                      setMenuVisible(false);
                      selectedSong.current = null;
                    }
                  }}
                  style={{ cursor: "pointer", width: "100%" }}>
                  {playlist.name}
                </div>
              </List.Item>
            )}
          />
        </Modal>
        <Table
          className="playlist-page-table"
          columns={columns}
          style={{ cursor: "pointer" }}
          onRow={(record, rowIndex) => {
            return {
              onContextMenu: (event) => {
                event.preventDefault();
                selectedSong.current = record;
                setMenuVisible(true);
              },
              onClick: (event) => {
                if (onSongClick) {
                  onSongClick(record, playlist.gradient);
                }
              },
            };
          }}
          dataSource={
            order === "Custom Order"
              ? filteredTitles
              : [...filteredTitles].sort((a, b) => {
                  if (order === "Popularity") {
                    return b.popularity - a.popularity;
                  } else if (order === "Duration") {
                    return b.duration - a.duration;
                  } else if (order === "Year") {
                    return b.year - a.year;
                  } else if (order === "Genre") {
                    return a.genre.localeCompare(b.genre);
                  } else if (order === "Title") {
                    return a.title && b.title
                      ? a.title.toString().localeCompare(b.title.toString())
                      : 0;
                  } else {
                    return 0;
                  }
                })
          }
          pagination={false}
          rowKey="id"
        />
      </div>
    </div>
  );
};

export default PlaylistPage;
