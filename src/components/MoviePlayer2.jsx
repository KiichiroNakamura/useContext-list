import React, { useEffect, useState, useRef } from "react";
//import "./MoviePlayer.css"
//import "./MoviePlayerBackRate.css"
import ReactPlayer from "react-player";
//import {button} from "react-bootstrap";

type Props = {
  url: string
};

export const MoviePlayer2 = (props) => {
  const playerRef = useRef();
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log("setUrl(" + props.url + ");");
    setUrl(props.url);
    setSeek(false);
    setReady(false);
  }, [props.url]);

  const [seek, setSeek] = useState(false);
  const handleSeek = () => {
    console.log("seek");
    if (seek) return;
    setSeek(true);
    playerRef.current.seekTo(0, "seconds");
  };

  const [ready, setReady] = useState(false);
  const handleReady = () => {
    console.log("ready");
    if (ready) return;
    setReady(true);
    playerRef.current.seekTo(4 * 60 * 60, "seconds");
  };

  const handlePlaybackRate = (i) => {
    var video = document.getElementsByTagName("video")[0];
    video.playbackRate = i;
  };

  return (
    <>
      <div className={"player-wrapper"}>
        <ReactPlayer
          ref={playerRef}
          className={"react-player"}
          url={url}
          controls={true}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload"
              }
            }
          }}
          width="100%"
          height="100%"
          onSeek={handleSeek}
          onReady={handleReady}
        />
        {url && (
          <div>
            <span id="double-speed-button">速度</span>
            <button
              className={"ml-3"}
              variant="outline-primary"
              onClick={() => handlePlaybackRate(1)}
            >
              x1
            </button>
            <button
              className={"ml-3"}
              variant="outline-primary"
              onClick={() => handlePlaybackRate(1.25)}
            >
              x1.25
            </button>
            <button
              className={"ml-3"}
              variant="outline-primary"
              onClick={() => handlePlaybackRate(1.5)}
            >
              x1.5
            </button>
            <button
              className={"ml-3"}
              variant="outline-primary"
              onClick={() => handlePlaybackRate(1.75)}
            >
              x1.75
            </button>
            <button
              className={"ml-3"}
              variant="outline-primary"
              onClick={() => handlePlaybackRate(2)}
            >
              x2
            </button>
            <br />
            <p>{url}</p>
          </div>
        )}
      </div>
    </>
  );
};
