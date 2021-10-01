import React, { useContext, useState, useMemo, useCallback } from "react";
import styled from "styled-components";

import { ListContext } from "../providers/GlobalProvider";

//https://storage.cloud.google.com/my-bucket-naka/6/3e8cb75c-f585-46a0-8c86-508ce4a42dd6

export const CloudVideoUrl = () => {
  console.log("CloudVideoUrl");
  const { fileList, setFileList } = useContext(ListContext);
  const [addUrl, setAddUrl] = useState("");
  const onChangeAddUrl = (e) => {
    setAddUrl(e.target.value);
  };
  const addFile = () => {
    if (addUrl === "") return;
    console.log("CloudVideoUrl-addURL:" + addUrl);
    //const fileObject = `{file:{name: ${addUrl}}}`;
    const fileObject = new File([""], addUrl, {
      type: "text/plain"
    });
    console.log(fileObject);
    const newUrlList = [...fileList, fileObject];
    console.log("CloudVideoUrl-newUrlList:" + newUrlList);
    setFileList(newUrlList);
    console.log("CloudVideoUrl-fileList:" + fileList);
    setAddUrl("");
  };
  return (
    <Sdiv>
      <Sinput text="file" value={addUrl} onChange={onChangeAddUrl} />
      <SdivButton>
        <button onClick={addFile}>add</button>
      </SdivButton>
      {/* <ul>
        {fileList.map((f, index) => {
          return <li key={index}>{f}</li>;
        })}
      </ul> */}
    </Sdiv>
  );
};
const Sinput = styled.input`
  width: 100%;
`;
const Sdiv = styled.div`
  display: table;
  width: 100%;
`;
const SdivButton = styled.div`
  display: table-cell;
  text-align: right;
  width: 30px;
`;
