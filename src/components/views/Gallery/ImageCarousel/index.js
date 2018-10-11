import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.css';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';

const ImageCarousel = (props) => {
  const { tileData } = props;
  return (
    <Carousel>
      {tileData.map(tile => (
        <div>
          <img src={tile.img} alt={tile.title} />
          <p />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
// export default withStyles(styles)(ImageCarousel);

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
