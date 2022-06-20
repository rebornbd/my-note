import Clock from "./Clock";
import { ClockFn } from "./ClockFn";
import styles from "./index.module.css";


export const StateLifecycle = () => {
  return (
    <div className={styles.container}>
      <h1>01: State and Lifecycle Example</h1>
      <div className={styles.innerContainer}>
        <Clock />
        <ClockFn />
      </div>
    </div>
  )
}
