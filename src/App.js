import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };
  handeChange =(event)=>{
    this.setState({
      inputsh:event.target.value,
      remainingItem:this.props.maxChars - this.state.inputsh.length
    })}


  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={280} handleChange={this.handleChange} />



      </div>
    )
  }
}

export default App
