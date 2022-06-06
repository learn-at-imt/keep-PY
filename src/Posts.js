import React from "react";
import { useGlobalContext } from "./Context";
import "./index.css"

const Posts = () => {
  const { postsList } = useGlobalContext();
  return (
    <div>
      {postsList.map((post) => (
          <div className="note">

            <h1>{post.title}</h1>
        <p>{post.body}</p>
          </div>
        
      ))}
    </div>
  );
};

export default Posts;
