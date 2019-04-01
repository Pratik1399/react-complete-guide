import React from 'react';

const post = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default post;

// 1)The Post  component receives the props  argument.
// 2)You can of course name this argument whatever you want - it's your function definition, React doesn't care!
// 3)But React will pass one argument to your component function => An object, which contains all properties you set up on <Post ... />.
// {props.title}  then dynamically outputs the title  property of the props  object - which is available since we set the title  property inside AllPosts  component
