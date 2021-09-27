import React, { useContext, useState, useRef, useEffect } from "react";

import { ListContext } from "../providers/ListProvider";

export const FirstList = () => {
  const [listData, setListData] = useContext(ListContext);
  // const [listVal, setListVal] = useState(["aaaaa", "bbbb"]);
  const [listVal, setListVal] = useState(listData);

  const addListItem = useRef(null);
  const addItem = () => {
    console.log(addListItem.current.value);
    const newList = [addListItem.current.value, ...listVal];
    setListData(newList);
  };
  useEffect(() => {
    setListVal(listData);
  }, [listData]);

  return (
    <div>
      {/* <input text="text" ref={addListItem} />
      <button onClick={addItem}>add</button> */}
      <ul>
        {listVal.map((list, index) => {
          return (
            <div style={{ display: "flex" }}>
              <li key={index}>{list}</li>
              <button>play</button>
              <button>del</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
