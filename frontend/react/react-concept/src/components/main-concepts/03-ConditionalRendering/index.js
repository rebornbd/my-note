import AgeCalculator from "./AgeCalculator";
import AgeCalculatorFn from "./AgeCalculatorFn";
import styles from "../../../common/css/common.module.css";


export const ConditionalRendering = () => {
  return (
    <div className={styles.container}>
      <h1>03: Conditional Rendering</h1>
      <div className={styles.innerContainer}>
        <AgeCalculator />
        <AgeCalculatorFn />
      </div>
    </div>
  )
}
