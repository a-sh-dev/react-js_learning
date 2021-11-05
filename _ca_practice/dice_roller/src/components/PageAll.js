import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export const Page = () => {
  const [post, setPost] = useState(null);
  // handle errors
  const [error, setError] = useState(null);

  // GET Request
  useEffect(() => {
    axios
      .get(`${baseURL}/1`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        //! handle errors
        setError(error);
      });
  }, []);

  // POST request
  function createPost() {
    axios
      .post(baseURL, {
        title: "Hey hey world!",
        body: "Posting a little update yo!"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  // PUT request
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Uhhmm... Hello?",
        body: "Is it me you're looking for?"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  // DELETE request
  function deletePost() {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("Post deleted!");
      setPost(null);
    });
  }

  if (error) return `Error: ${error.message}`;
  if (!post) return "There is no post";

  return (
    <div>
      <h4>Hello World</h4>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="btn" onClick={createPost}>
        Post
      </button>
      <button className="btn" onClick={updatePost}>
        Update Post
      </button>
      <button className="btn" onClick={deletePost}>
        Delete
      </button>
    </div>
  );
};
