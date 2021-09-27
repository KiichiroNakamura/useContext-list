import React, { useContext, useEffect, useState } from "react";
import { TextContext } from "../providers/TextProvider";

export const Second = () => {
  const textData = useContext(TextContext);
  const [textVal2, setTextVal2] = useState("bbbb");
  useEffect(() => {
    setTextVal2(textData);
  }, [textData]);
  return (
    <div>
      <p style={{ color: "red" }}>{textVal2}</p>
    </div>
  );
};
