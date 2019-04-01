// 1)State
// Whilst props allow you to pass data down the component tree,state is used to change the component, well, state from within.
// //Changes to state also trigger an UI update.

import React, { Component } from "react";

class NewPost extends Component {
  //state can only be accessed in class-based components!
  state = {
    counter: 1
  };
  render() {
    //Needs to be implemented in class-based components!
    //Needs to return some JSX!
    return <div>{this.state.counter}</div>;
  }
}

export default NewPost;

// Here, the NewPost  component contains state .
// Only class-based components can define and use state . 
// You can of course pass the state  down to functional components, but these then can't directly edit it.
// state  simply is a property of the component class, you have to call it state  though - the name is not optional.
// You can then access it via this.state  in your class JSX code (which you return in the required render()  method).

// Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state. The difference to props  is, that this happens within one and the same component - you don't receive new data (props ) from outside!
