import { useCallback, useState, useContext, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ListContext } from "../providers/ListProvider";
import { VideoContext } from "../providers/ListProvider";
import { MoviePlayer3 } from "./MoviePlayer3";

import { MoviePlayer2 } from "./MoviePlayer2";
import styled from "styled-components";

const style = {
  width: 200,
  height: 100,
  border: "1px dotted #888",
  margin: 0
};
export const Dropzone = () => {
  const { fileList, setFileList } = useContext(ListContext);
  const { videoLocalUrl, setVideoLocalUrl } = useContext(VideoContext);
  console.log("render");
  // setVideoLocalUrl("aaaaaa");
  // console.log("aaaa;" + videoLocalUrl);
  // const [listData,setListData] = u
  //console.log(videoLocalUrl);

  //const [fileList, setFileList] = useState([]);

  // const [videoUrl, setVideoUrl] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      console.log("acceptedFiles:", acceptedFiles);
      const newList = acceptedFiles;
      console.log(newList);
      setFileList(newList);
      //setListData(newList);

      console.log(fileList);
    },
    [fileList]
  );
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
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <div {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag or Click to select files</p>
        )}
      </div>
      {/* <Sdiv>
        <ul>
          {fileList.map((file, index) => (
            <li key={index}>
              {file.name}
              <button onClick={() => onClickPlay(fileList, index)}>play</button>
            </li>
          ))}
        </ul>
      </Sdiv> */}
      {/* player2はコメント外すと稼働する */}
      {/* <MoviePlayer2 url={videoLocalUrl} /> */}
      {/* <MoviePlayer3 /> */}
    </div>
  );
};
const Sdiv = styled.div({
  backgroundColor: "#dddddd"
});
