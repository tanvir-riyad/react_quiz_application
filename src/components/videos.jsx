import { useState } from "react";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/videos.module.css";
import Video from "./video";
import { Link } from "react-router-dom";

export default function Videos() {
  // const [page, setPage] = useState(1);
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) =>
          video.noq > 0 ? (
            <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>
          ) : (
            <Video
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
              key={video.youtubeID}
            />
          )
        )}
      {!loading && videos.length === 0 && <div>no data found</div>}
      {error && <div>no data found</div>}
      {loading && <div>Loading ...</div>}
    </div>
  );
}
