import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { ListContext, VideoContext } from "../providers/GlobalProvider";

const style = {
  width: 200,
  height: 100,
  border: "1px dotted #888",
  margin: 0
};
export const Dropzone = () => {
  const { fileList, setFileList } = useContext(ListContext);
  const { videoLocalUrl, setVideoLocalUrl } = useContext(VideoContext);
  console.log("render");

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log("acceptedFiles:", acceptedFiles);
      const newList = acceptedFiles;
      setFileList(newList);
    },
    [fileList]
  );
  const onClickPlay = useCallback(
    (files, index) => {
      const url = (window.URL || window.webkitURL).createObjectURL(
        files[index]
      );
      console.log("url-type:" + typeof url);
      setVideoLocalUrl(url);
      console.log("videolocalUrl:" + videoLocalUrl);
    },
    [fileList]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <div {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag or Click to select files</p>
        )}
      </div>
    </div>
  );
};
