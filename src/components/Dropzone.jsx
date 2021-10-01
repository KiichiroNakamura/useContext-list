import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { ListContext, VideoContext } from "../providers/GlobalProvider";
import styled from "styled-components";

const style = {
  width: "100%",
  height: 100,
  border: "1px dotted #888",
  margin: 0,
  padding: 0,
  backgroundColor: "#c0c0c0",
  borderRadius: 20,
  fontSize: "12px"
};
export const Dropzone = () => {
  const { fileList, setFileList } = useContext(ListContext);
  const { videoLocalUrl, setVideoLocalUrl } = useContext(VideoContext);
  console.log("render");

  const onDrop = (acceptedFiles) => {
    console.log("acceptedFiles:", acceptedFiles);
    const newList = acceptedFiles;
    const a = new File([], "foo.txt");
    setFileList(newList);
  };
  // const onClickPlay = useCallback(
  //   (files, index) => {
  //     const url = (window.URL || window.webkitURL).createObjectURL(
  //       files[index]
  //     );
  //     console.log("url-type:" + typeof url);
  //     setVideoLocalUrl(url);
  //     console.log("videolocalUrl:" + videoLocalUrl);
  //   },
  //   [fileList]
  // );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <div {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>ここにファイルをドラッグするか</p>
        ) : (
          <p>ここにファイルをドラッグするか、ここをクリック</p>
        )}
      </div>
      {/* <Sdiv>aaaa</Sdiv> */}
    </div>
  );
};
const Sdiv = styled.div`
  border: #000000;
  width: 200px;
  height: 100px;
  margin: 10px;
`;
