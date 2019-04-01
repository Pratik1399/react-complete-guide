// props and state  are CORE concepts of React.
// Actually, only changes in props  and/or state trigger React to re-render your components and potentially update the DOM in the browser

//props
// props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.
// 1)title  is the custom property (prop ) set up on the custom Post  component.
// 2)We basically replicate the default HTML attribute behavior we already know (e.g. <input type="text">  informs the browser about how to handle that input).
import React from "react";
import Post from "./Post";

const posts = () => {
  return (
    <div>
      <Post title="My first Post" />
    </div>
  );
};

export default posts;