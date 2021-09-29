import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";

import { ListContext } from "../providers/ListProvider";
import { VideoContext } from "../providers/ListProvider";
import { MoviePlayer3 } from "./MoviePlayer3";

export const FirstList = () => {
  const { fileList, setFileList } = useContext(ListContext);
  const { videoLocalUrl, setVideoLocalUrl } = useContext(VideoContext);
  // const [listVal, setListVal] = useState(["aaaaa", "bbbb"]);
  // const [listVal, setListVal] = useState(listData);
  //const [videoUrl, setVideoUrl] = useState(null);

  //const addListItem = useRef(null);
  const videUrl = useRef(null);
  useEffect(() => {
    console.log(fileList);
    setFileList(fileList);
  }, [fileList]);
  const setVideUrl = () => {};
  const onClickPlay = useCallback(
    (files, index) => {
      console.log(files[index]);
      // onDropAccepted: (files) => {
      console.log(files);
      const url = (window.URL || window.webkitURL).createObjectURL(
        files[index]
      );
      //alert(url);
      //setListData(files);
      console.log("url-type:" + typeof url);
      //setVideoUrl(url);
      setVideoLocalUrl(url);
      console.log("videolocalUrl:" + videoLocalUrl);
      // };
    },
    [fileList]
  );

  return (
    <div>
      {/* <input text="text" ref={addListItem} />
      <button onClick={addItem}>add</button> */}
      <ul>
        {/* {fileList.map((list, index) => {
          return (
            <div style={{ display: "flex" }}>
              <li key={index} ref={videUrl}>
                {list.name}: {index}
              </li>
              <button
                onClick={() => {
                  setVideUrl(index);
                }}
              >
                play
              </button>
              <button>del</button>
            </div>
          );
        })} */}
        {fileList.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => onClickPlay(fileList, index)}>play</button>
          </li>
        ))}
      </ul>
      {/* <MoviePlayer3 /> */}
    </div>
  );
};
