import React from "react";
import Button from "./Button";

export default class DrumMachine extends React.Component {
  state = {
    keypress: undefined,
    buttons: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
  };

  handleKeyDown = event => {
    this.setState(() => ({
      keypress: String.fromCharCode(event.keyCode)
    }));
    console.log(this.state.keypress);
    alert(String.fromCharCode(event.keyCode));
  };
  handleButtonClick = event => {
    this.setState(() => console.log(event));
    console.log(event);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        <Button keypress={this.state.keypress} buttons={this.state.buttons} />
        <div id="settings">
          <div id="volume" />
          <div id="power" />
          <div id="bank" />
        </div>
      </div>
    );
  }
}
