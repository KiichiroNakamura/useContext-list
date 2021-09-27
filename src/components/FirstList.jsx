import React, { useContext, useState, useRef } from "react";

//import { ListContext } from "../providers/ListProvider";

export const FirstList = () => {
  const [listVal, setListVal] = useState(["aaaaa", "bbbb"]);
  // const [listData, setListData] = useContext(ListContext);
  const addListItem = useRef(null);
  const addItem = () => {
    console.log(addListItem.current.value);
    const newList = [addListItem.current.value, ...listVal];
    setListVal(newList);
  };

  return (
    <div>
      <h1>List</h1>
      <input text="text" ref={addListItem} />
      <button onClick={addItem}>add</button>
      <ul>
        {listVal.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </div>
  );
};
