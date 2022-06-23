import UserForm from "./UserForm";
import styles from "../../../common/css/common.module.css";


export const UseRef = () => {
  return (
    <div className={styles.container}>
      <h1>05: useRef Example</h1>
      <div className={styles.innerContainer}>
        <UserForm />
      </div>
    </div>
  )
}
