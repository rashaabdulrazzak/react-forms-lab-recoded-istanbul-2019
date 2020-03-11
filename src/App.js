import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {
constructor(){
  super()
  this.state ={
    username:'',
    password:''

  }
}

handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  login = ({ username, password }) => {
    event.preventDefault()
    console.log(`Logging in ${username} with password ${password}`);
  };


  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} values = {this.state}handleChange={this.handleChange} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={280} />



      </div>
    )
  }
}

export default App
