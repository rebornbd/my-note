import React, { useState, useEffect } from 'react';

import { rotatingCube } from "../../utils/rotatingCube";
import {
  Face1,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6
} from "../../images/love";
import { Hero } from "./components/Hero";
import { Post } from "../../components";
import styles from "./Home.module.css";


const Home = () => {
  useEffect(() => {
    const heroContainer = document.getElementById('heroContainer');
    const heroCube = document.getElementById('heroCube');

    rotatingCube(
      heroContainer,
      heroCube,
      Face1,
      Face2,
      Face3,
      Face4,
      Face5,
      Face6
    );
  }, []);

  const HeroCube = () => {
    return (
      <div className={styles.heroCube} id="heroContainer">
        <canvas id="heroCube" />
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <HeroCube />
        <Hero />
      </div>

      <Post />
    </div>
  )
}

export default Home;
