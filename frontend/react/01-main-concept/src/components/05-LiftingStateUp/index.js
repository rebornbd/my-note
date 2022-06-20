import Calculator from "./Calculator";
import CalculatorFn from "./CalculatorFn";
import styles from "../common/css/common.module.css";


export const LiftingStateUp = () => {
  return (
    <div className={styles.container}>
      <h1>05: Lifting State Up</h1>
      <div className={styles.innerContainer}>
        <Calculator />
        <CalculatorFn />
      </div>
    </div>
  )
}
