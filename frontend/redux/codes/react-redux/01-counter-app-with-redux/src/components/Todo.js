import React from 'react'
import styles from "./Todo.module.css";


const Todo = ({ todo }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.header}>ID:</span>
        <span>{todo.id}</span>
      </div>
      <div>
      <span className={styles.header}>Title:</span>
        <span>{todo.title}</span>
      </div>
    </div>
  )
}

export default Todo;
