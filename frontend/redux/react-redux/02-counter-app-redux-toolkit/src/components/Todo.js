import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../features/todo/todoAPI";
import styles from "./Todo.module.css";


const Todo = () => {
  const { data, error, isLoading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className={styles.container}>
      <h1>REDUX-TOOLKIT TODO APP</h1>
      { isLoading && <h3>Loading</h3> }
      { error && <h3>{error}</h3> }
      { data && <div className={styles.todoContainer}>
        { data && data.map(todo => (
          <div key={todo.id} className={styles.todo}>
            <div>{todo.id}</div>
            <div>{todo.title}</div>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Todo;
