import React, { useContext, useState } from "react";

import { TextContext } from "../providers/TextProvider";

export const First = () => {
  const [textVal, setTextVal] = useState("aaaaa");
  const [textData, setTextData] = useContext(TextContext);
  console.log(textData);

  const onChangeText = (e) => {
    setTextVal(e.target.value);
    setTextData(e.target.value);
  };

  return (
    <div>
      <h1>Hello</h1>
      <input text="text" placeholder={textVal} onChange={onChangeText} />
      <p>{textVal}</p>
    </div>
  );
};
