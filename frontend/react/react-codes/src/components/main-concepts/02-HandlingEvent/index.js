import Toggle from "./Toggle";
import ToggleFn from "./ToggleFn";
import styles from "../../../common/css/common.module.css";


export const HandlingEvent = () => {
  return (
    <div className={styles.container}>
      <h1>02: Handling Event Example</h1>
      <div className={styles.innerContainer}>
        <Toggle />
        <ToggleFn />
      </div>
    </div>
  )
}
