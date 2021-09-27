import React, { createContext, useState } from "react";
export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState(["init1", "init2"]);

  return (
    <ListContext.Provider value={[list, setList]}>
      {children}
    </ListContext.Provider>
  );
};
