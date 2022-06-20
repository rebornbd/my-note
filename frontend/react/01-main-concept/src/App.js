import React from "react";

import { StateLifecycle } from "./components/01-stateLifecycle";
import styles from "./App.module.css";


const App = () => {
  return (
    <div className={styles.container}>
      <StateLifecycle />
    </div>
  )
}

export default App;
