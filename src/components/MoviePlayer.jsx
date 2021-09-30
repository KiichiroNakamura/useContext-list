import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { VideoContext } from "../providers/GlobalProvider";

export const MoviePlayer = () => {
  console.log("render");
  const { videoLocalUrl } = useContext(VideoContext);

  const playerRef = useRef();

  useEffect(() => {
    console.log("setUrl(" + videoLocalUrl + ");");
    setSeek(false);
    setReady(false);
  }, [videoLocalUrl]);

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
      <SdivWithH1>
        <SpVideoUrl>再生URL:{videoLocalUrl}</SpVideoUrl>
        <Sdiv>
          <div className={"player-wrapper"}>
            <ReactPlayer
              ref={playerRef}
              className={"react-player"}
              url={videoLocalUrl}
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
            {/* {videoLocalUrl && (
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
            <p>{videoLocalUrl}</p>
          </div>
        )} */}
          </div>
        </Sdiv>
      </SdivWithH1>
    </>
  );
};
const Sdiv = styled.div`
  background-color: #888888;
  border: solid 2px #000000;
  margin-top: 0;
`;
const SdivWithH1 = styled.div`
  flex-flow: column;
`;
const SpVideoUrl = styled.p`
  text-align: center;
  background-color: #a9a9a9;
  margin: 0;
  text-align: left;
  text-align: px;
  border: double;
`;
