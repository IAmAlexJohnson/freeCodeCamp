import React from "react";

export default class Button extends React.Component {
  state = {
    selectedButton: " "
  };
  chooseSound = button => this.setState({ selectedButton: button });
  playAudio = () => {
    switch (this.state.selectedButton) {
      case "Q":
        this.Q.play();
      case "W":
        this.W.play();
      case "E":
        this.E.play();
      case "A":
        this.A.play();
      default:
        this.Q.play();
    }
  };

  handlePickSound = sound => {
    this.setState(sound => ({ selectedButton: sound }));
  };

  render() {
    return (
      <div id="button-container">
        {this.props.buttons.map((button, index) => (
          <button
            className="drum-pad"
            id={button}
            key={button}
            onClick={this.playAudio}
          >
            {button}
          </button>
        ))}
        <div id="audio-files">
          <audio
            ref={Q => {
              this.Q = Q;
            }}
          >
            <source
              src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
              type="audio/mpeg"
            />
          </audio>
          <audio
            ref={W => {
              this.W = W;
            }}
          >
            <source
              src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
              type="audio/mpeg"
            />
          </audio>
          <audio
            ref={E => {
              this.E = E;
            }}
          >
            <source
              src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
              type="audio/mpeg"
            />
          </audio>
          <audio
            ref={A => {
              this.A = A;
            }}
          >
            <source
              src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    );
  }
}
