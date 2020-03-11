import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : '',
      numitem : props.maxChars
    };
  }

  handleChange =(event)=>{
    this.setState({
      message:event.target.value
      message:this.state.maxChars - this.state.message.length
    })}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)}/>
        {this.state.numitem}
      </div>
    );
  }
}

export default TwitterMessage;
