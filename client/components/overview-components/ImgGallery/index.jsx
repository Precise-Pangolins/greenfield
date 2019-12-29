import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import queryString from "querystring";
import Carousel from "react-image-gallery";
import $ from "jquery";

import Thumbnails from "./Thumbnails.jsx";
import StyleSelector from "../StyleSelector/index.jsx";

let productId = queryString.parse(location.search)["?productId"] || 1;

function onMouseOver(event) {
  const img = event.target;
  const topOffset = img.offsetTop;
  const leftOffset = img.offsetLeft;
  const height = img.height;
  const width = img.width;

  img.style.transformOrigin =
    ((event.pageX - leftOffset) / width) * 50 +
    "% " +
    ((event.pageY - topOffset) / height) * 50 +
    "%";
}

function ImgGallery({ currentStyle, info, images = [] }) {
  currentStyle = currentStyle || images[0] || [];
  let [isFullScreen, setIsFullScreen] = useState(false);
  let [hasRegistered, setHasRegistered] = useState(false);

  let image = useRef(null);

  let modifiedImgs = (currentStyle.photos || initialImg || []).map(photo => {
    return { original: photo.url, thumbnail: photo.thumbnail_url };
  });

  function handleClick(event) {
    if (!isFullScreen) {
      return;
    }
    const img = event.target;
    image.current = img;

    img.className = "tile";
    if (img.style.transform === "scale(2.5)") {
      // here we are zooming out
      img.style.transform = "scale(1)";
      img.style.cursor = "zoom-in";
      img.removeEventListener("mousemove", onMouseOver);
      setHasRegistered(false);
      return;
    }
    // here we are zooming in
    img.style.transform = "scale(2.5)";
    img.style.cursor = "zoom-out";
    if (!hasRegistered) {
      img.addEventListener("mousemove", onMouseOver);
      setHasRegistered(true);
    }
  }

  function onScreenChange(fullScreenElem) {
    if (fullScreenElem) {
      setIsFullScreen(true);
      image.current.style.cursor = "zoom-in";
    } else {
      setIsFullScreen(false);
      image.current.style.transform = "scale(1)";
      image.current.style.cursor = "auto";
      image.current.removeEventListener("mousemove", onMouseOver);
    }
  }
  return (
    <Carousel
      onScreenChange={onScreenChange}
      showBullets={true}
      onClick={handleClick}
      items={modifiedImgs}
    />
  );
}

export default ImgGallery;
