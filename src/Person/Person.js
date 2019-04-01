import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} of age.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
  //return  <p>I'm a {props.name} and I am {props.age} of age.</p>

  //return  <p>I'm a Person and I am {Math.floor(Math.random()*30)} years of age.</p>

  //return  <p>I'm a Person and I am Math.floor(Math.random()*30) years of age.</p>
};

export default person;
