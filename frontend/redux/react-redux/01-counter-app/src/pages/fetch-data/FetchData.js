import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getAllTodos } from "../../services/actions/todosActions";
import Todo from '../../components/Todo';
import styles from "./FetchData.module.css";


const FetchData = () => {
  const { data, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const Todos = ({ todos }) => {
    return (
      <div className={styles.todosContainer}>
        {todos && todos.map(todo => (
          <Todo todo={todo} key={todo.title} />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1>REACT REDUX API FETCH DATA</h1>
      <h3>REDUX | REACT-REDUX | REDUX-THUNK</h3>

      { isLoading && <h1>Loading...</h1>  }
      { error && <h1>{error}</h1>  }
      { data && <Todos todos={data} /> }
    </div>
  )
}

export default FetchData;
