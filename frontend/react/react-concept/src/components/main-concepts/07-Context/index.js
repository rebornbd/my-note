import Users from "./Users";
import styles from "../../../common/css/common.module.css";


export const Context = () => {
  return (
    <div className={styles.container}>
      <h1>07: Context</h1>
      <div className={styles.innerContainer}>
        <Users />
      </div>
    </div>
  )
}
