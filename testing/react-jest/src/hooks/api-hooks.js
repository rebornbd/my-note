import axios from "axios";
import React, { useState, useEffect } from "react";


export const FetchState = {
  DEFAULT: "DEFAULT",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};

export function useGetPosts() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const resData = res.data;
      // const posts = resData.splice(0, 10);

      // setPosts(posts);
      setPosts(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [posts, fetchState, getPosts];
}
