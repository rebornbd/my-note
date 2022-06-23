import Count from "./Count";
import Post from "./Post";
import styles from "../../../common/css/common.module.css";


export const UseReducer = () => {
  return (
    <div className={styles.container}>
      <h1>06: useReducer Example</h1>
      <div className={styles.innerContainer}>
        <Count />
        <hr />
        <Post />
      </div>
    </div>
  )
}
