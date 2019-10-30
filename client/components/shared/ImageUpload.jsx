import React, { useState, useEffect } from "react";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    console.log(files);
  }, [files]);
  return (
    <input
      id="uploadFile"
      type="file"
      multiple
      onChange={event => {
        if (event.target.files.length > 5) {
          alert("You can only upload 5 images");
          return;
        } else {
          setFiles([...event.target.files]);
        }
      }}
    />
  );
};

export default ImageUpload;
