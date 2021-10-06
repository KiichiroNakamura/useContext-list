import React, { createContext, useState } from "react";
export const ListContext = createContext();
export const VideoContext = createContext();

export const ListProvider = ({ children }) => {
  // const a = new File(["foo"], "foo.txt", {
  //   type: "text/plain"
  // });
  // const b = new File([""], "bar.txt", {
  //   type: "text/plain"
  // });
  // const ary = [a, b];
  // const [fileList, setFileList] = useState(ary);

  const [fileList, setFileList] = useState([]);

  return (
    <ListContext.Provider value={{ fileList, setFileList }}>
      {children}
    </ListContext.Provider>
  );
};

export const VideoLocalUrlProvider = ({ children }) => {
  const [videoLocalUrl, setVideoLocalUrl] = useState("    ");

  return (
    <VideoContext.Provider value={{ videoLocalUrl, setVideoLocalUrl }}>
      {children}
    </VideoContext.Provider>
  );
};
