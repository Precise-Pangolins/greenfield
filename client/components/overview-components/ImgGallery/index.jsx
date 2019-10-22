import React, { Component } from 'react';

export class ImgGallery extends Component {
  render() {
    const imgSrc = `https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555319890/shape/mentalfloss/munchkinhed.png`;
    return (
      <div>
        <img src={imgSrc} />
        <p> WOOO!! Images Here!!</p>
      </div>
    );
  }
}

export default ImgGallery;
