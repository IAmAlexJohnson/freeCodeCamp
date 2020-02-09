import React from "react";
import Header from "./Header";

export default class Editor extends React.Component {
  render() {
    const title = "Editor";
    // console.log(`MARKDOWN: ${this.props.markdown}`);
    return (
      <div id="editor__container">
        <Header title={title} />
        <textarea
          id="editor"
          value={this.props.markdown}
          onChange={event => this.props.handleUpdate(event.target.value)}
        >
          {this.props.markdown}
        </textarea>
      </div>
    );
  }
}
