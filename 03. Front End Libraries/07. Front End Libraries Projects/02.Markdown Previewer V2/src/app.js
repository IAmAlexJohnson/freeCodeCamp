const appRoot = document.getElementById('app');

class MarkdownPreviewer extends React.Component {
    render() {
      return (
        <div id='container'>
          <h1>Markdown Previewer</h1>
          <Editor/>
          <Previewer />
        </div>
      );
    }
  };

class Editor extends React.Component {
  render() {
      return (
        <div id='editor'>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      );
    }
}

class Previewer extends React.Component {
  render() {
      return (
        <div id='previewer'>
          test
        </div>
      );
    }
}

  ReactDOM.render(<MarkdownPreviewer/>, appRoot);