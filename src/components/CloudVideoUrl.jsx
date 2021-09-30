import React, { useContext, useState, useMemo, useCallback } from "react";
import styled from "styled-components";

import { ListContext } from "../providers/GlobalProvider";

export const CloudVideoUrl = () => {
  const [addUrl, setAddUrl] = useState("");
  const [dummyList, setDummyList] = useState(["aaaa", "bbbb"]);
  //const { fileList, setFileList } = useContext(ListContext);
  const onChangeAddUrl = (e) => {
    setAddUrl(e.target.value);
  };
  const addFile = useCallback(() => {
    console.log("addUrl:" + addUrl);
    if (addFile === "") return;
    console.log("addURL:" + addUrl);
    // const newUrlList = [...fileList, addUrl];
    // setFileList(newUrlList);
    setAddUrl("");
  }, [addUrl]);
  return (
    <Sdiv>
      <Sinput text="text" value={addUrl} onChange={onChangeAddUrl} />
      <SdivButton>
        <button onClick={addFile}>add</button>
      </SdivButton>
      <ul>
        <li>aaaaa</li>;
      </ul>
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
