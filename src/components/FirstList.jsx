import React, { useContext, useState } from "react";

//import { ListContext } from "../providers/ListProvider";

export const FirstList = () => {
  const [listVal, setListVal] = useState(["aaaaa", "bbbb"]);
  // const [listData, setListData] = useContext(ListContext);

  const onChangeText = (e) => {};

  return (
    <div>
      <h1>Hello</h1>
      <input text="text" onChange={onChangeText} />
      <ul>
        {listVal.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </div>
  );
};
