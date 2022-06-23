import React, { useEffect, useReducer } from 'react'

const initialState = {
  loading: true,
  error: '',
  post: [],
}

const reducer = (state, action) => {
  // console.log("state:", state);
  // console.log("action:", action);

  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        post: action.result,
        error: '',
      };
    
    case 'ERROR':
      return {
        loading: false,
        post: [],
        error: 'There was a problem fetching!',
      };
    
    default:
      return state;
  }
}


const Post = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        const data = res.splice(0, 2);
        dispatch({ type: 'SUCCESS', result: data });
        // console.log(data);
      })
      .catch(() => {
        dispatch({ type: 'ERROR' });
      })
  }, []);

  return (
    <div>
      {state.loading
        ? 'Loading....'
        : state.post && state.post.map((post) => (
            <div key={post.title}>
              <h3>{post?.id} - {post?.title}</h3>
              <p>{post?.body}</p>
            </div>
          ))
      }
    </div>
  )
}

export default Post;
