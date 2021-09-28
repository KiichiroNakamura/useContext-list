import React, { useContext, useState, useRef, useEffect } from "react";

import { ListContext } from "../providers/ListProvider";
import { MoviePlayer3 } from "./MoviePlayer3";

export const FirstList = () => {
  const [listData, setListData] = useContext(ListContext);
  // const [listVal, setListVal] = useState(["aaaaa", "bbbb"]);
  const [listVal, setListVal] = useState(listData);
  //const [videoUrl, setVideoUrl] = useState(null);

  const addListItem = useRef(null);
  const videUrl = useRef(null);
  function addItem() {
    console.log(addListItem.current.value);
    const newList = [addListItem.current.value, ...listVal];
    setListData(newList);
  }
  useEffect(() => {
    console.log(listData);
    setListVal(listData);
  }, [listData]);

  const setVideUrl = (index) => {
    console.log(listVal[index]);
    // const zurl = (window.URL || window.webkitURL).createObjectURL(
    //   listVal[index]
    // );
    // setVideUrl(zurl);
  };

  return (
    <div>
      {/* <input text="text" ref={addListItem} />
      <button onClick={addItem}>add</button> */}
      <ul>
        {listVal.map((list, index) => {
          return (
            <div style={{ display: "flex" }}>
              <li key={index} ref={videUrl}>
                {list.name}: {index}
              </li>
              <button
                onClick={() => {
                  setVideUrl(index);
                }}
              >
                play
              </button>
              <button>del</button>
            </div>
          );
        })}
      </ul>
      <MoviePlayer3 />
    </div>
  );
};
