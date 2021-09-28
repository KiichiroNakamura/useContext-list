import React, { createContext, useState } from "react";
export const ListContext = createContext();
export const VideoContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <ListContext.Provider value={[list, setList]}>
      {children}
    </ListContext.Provider>
  );
};

export const VideoLocalUrlProvider = ({ children }) => {
  const [videoLocalUrl, setVideoLocalUrl] = useState("");

  return (
    <VideoContext.Provider value={[videoLocalUrl, setVideoLocalUrl]}>
      {children}
    </VideoContext.Provider>
  );
};
