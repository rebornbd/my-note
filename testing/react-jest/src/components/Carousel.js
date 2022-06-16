import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

import {
  Face1,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6
} from "../images/slide";
import styles from "./Carousel.module.css";


export const Carousel = () => {
  const images = [Face1, Face2, Face3, Face4, Face5, Face6];


  return (
    <div className={styles.container}>
      <ReactCarousel autoPlay={true}>
        <div>
          <img src={images[0]} />
        </div>

        <div>
          <img src={images[1]} />
        </div>

        <div>
          <img src={images[2]} />
        </div>

        <div>
          <img src={images[3]} />
        </div>

        <div>
          <img src={images[4]} />
        </div>

        <div>
          <img src={images[5]} />
        </div>
      </ReactCarousel>
    </div>
  )
}
