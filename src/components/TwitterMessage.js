import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : ''
    };
  }

  handleChange =(event)=>{
    this.setState({
      message:event.target.value
      //message:this.state.maxChars - this.state.message.length
    })}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)}/>
        {this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
