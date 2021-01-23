import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput"
import UserOutput from "./UserOutput"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      credentials:
        {
          username: "divineunited",
          password: "12345",
        }
    }
  }

  usernameChangeHandler = (event) => {
    this.setState(
      {
        credentials:
          {
            username: event.target.value,
            password: "12345",
          }
      }
    )
  }

  render() {
    return (
      <div className="App">
        <UserInput
          updateUserName = {this.usernameChangeHandler}
          username = {this.state.credentials.username}
        />
        <UserOutput
          username = {this.state.credentials.username}
          password = {this.state.credentials.password}
        />

        <h3>Instructions:</h3>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        </ol>
      </div>
    );
  }
}

export default App;
