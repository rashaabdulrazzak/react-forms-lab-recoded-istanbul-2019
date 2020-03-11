import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputsh : "",
      remainingItem : 280
    };
  }
handeChange =(event)=>{
  this.setState({
    inputsh:event.target.value,
    remainingItem:this.props.maxChars - this.state.inputsh.length
  })


}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.props.maxChars} onChange={this.handeChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
