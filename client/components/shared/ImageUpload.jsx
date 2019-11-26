import React, { useState, useEffect } from "react";
import axios from "axios";
// import APIKey from "./imageLoad.config.js";
/***HOW TO USE****/

/***move photos and setPhotos state to parent form, send both back down as props using the same naming.
 * everything should still work the same.
 * Set config files with API key and export
 */
const ImageUpload = ({ photos, setPhotos }) => {
  const [files, setFiles] = useState([]);

  // const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getURLS(files);
  }, [files]);
  const getURLS = files => {
    let imgURLS = files.map(file => {
      let data = new FormData();

      data.append("image", file);

      // return axios.post(`https://api.imgbb.com/1/upload?key=${APIKey}`, data);
    });

    Promise.all(imgURLS)
      .then(urls => {
        for (let i = 0; i < urls.length; i++) {
          setPhotos([...photos, urls[i].data.data.url]);
        }
      })
      .catch(err => console.err);
  };
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
