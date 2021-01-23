import React, { Component } from 'react';
import './App.css';
import Validation from './Validation.js'
import Character from './Character.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
  }


  handleTextInput = (event) => {
    let input = {...this.state.input};
    input = event.target.value;

    this.setState(
      {input: input}
    )
  }

  handleDeleteChar = (charIndex) => {
    const inputArr = [...this.state.input.split('')];
    inputArr.splice(charIndex, 1);

    this.setState(
      {input: inputArr.join('')}
    )
  }

  render() {
    let chars = null;
    if (this.state.input.length > 0) {
      const myinputarr = [...this.state.input.split('')];
      chars = 
        <div>
          {myinputarr.map((c, index) => {
            return <Character
              char = {c}
              key = {index}
              click = {() => this.handleDeleteChar(index)}
            />
          })}
        </div>
    }

    return (
      <div className="App">
        <input type="text" onChange={this.handleTextInput} value={this.state.input}></input>
        <p>Please enter at least 5 characters. You've entered {this.state.input.length} characters.</p>
        <Validation
          textLength = {this.state.input.length}
        />
        {chars}

        <h3>TODO:</h3>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
