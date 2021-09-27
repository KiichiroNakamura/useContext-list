import React, { useContext, useState, useEffect } from "react";
import { TextContext } from "../providers/TextProvider";

export const Third = () => {
  const [textVal3, setTextVal3] = useState("cccc");
  const [textData, setTextData] = useContext(TextContext);
  useEffect(() => {
    setTextVal3(textData);
  }, [textData]);
  return (
    <div>
      <p style={{ color: "blue" }}>{textVal3}</p>
    </div>
  );
};
