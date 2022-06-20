import React from "react";

import { StateLifecycle } from "./components/01-stateLifecycle";
import { HandlingEvent } from "./components/02-handlingEvent";
import styles from "./App.module.css";


const App = () => {
  return (
    <div className={styles.container}>
      <StateLifecycle />
      <HandlingEvent />
    </div>
  )
}

export default App;
