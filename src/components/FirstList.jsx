import React, { useContext, useEffect, useCallback } from "react";

import { ListContext, VideoContext } from "../providers/GlobalProvider";

export const FirstList = () => {
  const { fileList, setFileList } = useContext(ListContext);
  const { videoLocalUrl, setVideoLocalUrl } = useContext(VideoContext);
  useEffect(() => {
    console.log(fileList);
    setFileList(fileList);
  }, [fileList]);
  const onClickPlay = useCallback(
    (files, index) => {
      console.log(files[index]);
      const url = (window.URL || window.webkitURL).createObjectURL(
        files[index]
      );
      console.log("url-type:" + typeof url);
      setVideoLocalUrl(url);
      console.log("videolocalUrl:" + videoLocalUrl);
    },
    [fileList]
  );

  return (
    <div>
      <ul>
        {fileList.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => onClickPlay(fileList, index)}>play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
