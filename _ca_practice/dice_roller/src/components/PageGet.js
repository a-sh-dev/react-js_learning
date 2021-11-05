import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export const PageGet = () => {
  const [post, setPost] = useState(null);

  // GET Request
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h4>Hello World</h4>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
