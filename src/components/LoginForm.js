import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <form onSubmit={this.props.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.props.values.username} onChange={this.props.values.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.props.password} onChange = {this.props.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
