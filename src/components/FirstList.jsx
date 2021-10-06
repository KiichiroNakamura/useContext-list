import React, { useContext, useState, useCallback, useEffect } from "react";

import { ListContext, VideoContext } from "../providers/GlobalProvider";
import styled from "styled-components";
//https://storage.cloud.google.com/my-bucket-naka/6/3e8cb75c-f585-46a0-8c86-508ce4a42dd6
//https://dl8.webmfiles.org/big-buck-bunny_trailer.webm
export const FirstList = () => {
  console.log("FirstList");
  const { fileList, setFileList } = useContext(ListContext);
  console.log("FirstList-fileList:" + fileList);
  const { videoLocalUrl, setVideoLocalUrl } = useContext(VideoContext);

  const onClickPlay = (files, index) => {
    let url;
    console.log("FirstList-onClickPlay");

    console.log(files[index]);
    const x = files[index];
    console.log("x-type:" + typeof x);
    console.log("x:" + x);
    console.log("x.file.name:" + x.name);
    if (x.name.slice(0, 4) !== "http") {
      // ローカルファイル再生
      url = (window.URL || window.webkitURL).createObjectURL(files[index]);
    } else {
      url = x.name;
    }
    console.log("url-type:" + typeof url);
    setVideoLocalUrl(url);
    console.log("videolocalUrl:" + videoLocalUrl);

    //web ファイル再生
    //console.log("name:" + files[index].key("name"));
    //const prefix = files[index].name;
    //url = "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm";
    // if (prefix !== "http") {
    //   url = (window.URL || window.webkitURL).createObjectURL(files[index]);
    // } else {
    //   url = files[index].name;
    // }
  };

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
  width: 100%;
  /* list-style: none; */
  /* width: 450px; */
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
