import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
//import Posts from "./Person/PropsAndState/AllPosts"
//import NewPost from "./Person/PropsAndState/NewPost";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    //DON'T DO THIS:this.state.persons[0].name='Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi,I am a React App.</h1>
        <p>This is really working.</p>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        {/* <button onClick={this.switchNameHandler.bind(this,'Maximilian')}>Switch Name</button> */}
        <button onClick={()=>this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max')}
        >
          My Hobbies:Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        {/* <Posts/> */}
        {/* <NewPost/> */}
      </div>
    );

    //return React.createElement('div',null,'H1','Hi, I\'m a React App!!!');

    // return React.createElement('div',null,React.createElement('div','null','Does this Work Now?'));

    // return React.createElement('div',{className:'App'},React.createElement('div',null,'Does This Work Now?'));
  }
}

export default App;
