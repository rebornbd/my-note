import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import styles from "../../../common/css/common.module.css";


export const HigherOrderComponent = () => {
  return (
    <div className={styles.container}>
      <h1>01: Higher-Order Components Example</h1>
      <div className={styles.innerContainer}>
        <ClickCounter />
        <HoverCounter />
      </div>
    </div>
  )
}
