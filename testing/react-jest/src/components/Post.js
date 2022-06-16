import React from "react";

import {
  FetchState,
  useGetPosts
} from "../hooks/api-hooks";
import styles from "./Post.module.css";


const Post = () => {
  const [posts, fetchState, getPosts] = useGetPosts();
  const btnOnClick = () => getPosts();

  return (
    <div>
      <h1>React API hooks</h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p>
            Hello there, click the button below to get the list of posts from
            the API.
          </p>
          <button onClick={btnOnClick} className={styles.btn}>Get Posts</button>
        </>
      )}

      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Oops! Something went wrong. Please try again.</p>
          <button onClick={btnOnClick}>Get Posts</button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p>Here's the list of posts:</p>
          <div className={styles.postsList}>
            {posts.map((post) => (
              <div key={post.id} className={styles.post}>
                <div className={styles.title}>
                  {post.id} - {String(post.title).toLocaleUpperCase()}
                </div>
                <div className={styles.body}>{post.body}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export {
  Post
};
