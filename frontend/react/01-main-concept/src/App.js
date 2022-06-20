import React from "react";

import { StateLifecycle } from "./components/01-StateLifecycle";
import { HandlingEvent } from "./components/02-HandlingEvent";
import { ConditionalRendering } from "./components/03-ConditionalRendering";
import styles from "./App.module.css";


const App = () => {
  return (
    <div className={styles.container}>
      <StateLifecycle />
      <HandlingEvent />
      <ConditionalRendering />
    </div>
  )
}

export default App;
