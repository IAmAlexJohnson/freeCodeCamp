import React from "react";
import Header from "./Header";

marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};

export default class Previewer extends React.Component {
  render() {
    const title = "Previewer";
    return (
      <div id="preview__container">
        <Header title={title} />
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.markdown, { renderer: renderer })
          }}
        />
      </div>
    );
  }
}
