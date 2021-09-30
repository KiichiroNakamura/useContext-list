import React, { useContext, useEffect, useCallback } from "react";

import { ListContext, VideoContext } from "../providers/GlobalProvider";
import styled from "styled-components";

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
      <Sul>
        {fileList.map((file, index) => (
          <Sli key={index}>
            <SdivName>{file.name}</SdivName>
            <SdivButton>
              <button onClick={() => onClickPlay(fileList, index)}>選択</button>
            </SdivButton>
          </Sli>
        ))}
      </Sul>
    </div>
  );
};
const Sbutton = styled.button`
  border-radius: 8pxl;
  height: 32px;
`;
const SdivButton = styled.div`
  display: table-cell;
  text-align: right;
  width: 30px;
`;

const Sul = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 1em;
  text-indent: -1em;
`;
const Sli = styled.li`
  display: table;
  width: 35%;
  /* list-style: none; */
  width: 450px;
  /* display: left; */
  background-color: #fff0f5;
  background-position-x: -2em;
  border-bottom: solid 2px #dcdcdc;
  border-left: solid 2px #dcdcdc;
  font-size: 16px;
  color: "red";
  padding-left: 1em;
  margin-left: -1em;
  /* text-indent: -2em; */
`;
const SdivName = styled.div`
  display: table-cell;
  text-align: left;
`;
