import ListItem from "./ListItem";
import ListItemFn from "./ListItemFn";
import styles from "../../../common/css/common.module.css";


export const ListKeys = () => {
  return (
    <div className={styles.container}>
      <h1>04: List and Keys</h1>
      <div className={styles.innerContainer}>
        <ListItem />
        <ListItemFn />
      </div>
    </div>
  )
}
