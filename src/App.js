import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {
constructor(){
  super()
  this.state ={
    maxChars : 280 ,
    message : ''
  }
}
  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };
  handeChange =(event)=>{
    this.setState({
      message:event.target.value,
      message:this.state.maxChars - this.state.message.length
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
        <TwitterMessage maxChars={this.state.maxChars} message={this.state.message} handleChange={this.handleChange} />



      </div>
    )
  }
}

export default App
