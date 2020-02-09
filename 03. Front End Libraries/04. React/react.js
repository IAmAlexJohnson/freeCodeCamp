/* ================================= */
  // Create a Simple JSX Element
  const JSX = <h1>Hello JSX!</h1>;

/* ================================= */
  // Create a Complex JSX Element
    // write your code here
    const JSX = <div>
        <h1>Alex is Awesome</h1>
        <p>*Alex Was Here*</p>
        <ul>
            <li>Stuff</li>
            <li>and</li>
            <li>things</li>
        </ul>
    </div>

/* ================================= */
  // Add Comments in JSX
    const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
       {/* I'm a comment */}
      <p>Here's a subtitle</p>
    </div>
    );

    '
/* ================================= */
  // Render HTML Elements to the DOM
    const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // change code below this line
  ReactDOM.render(JSX, document.getElementById('challenge-node') )

/* ================================= */
  // Define an HTML Class in JSX
    const JSX = (
      <div className = "myDiv">
        <h1>Add a class to this div</h1>
      </div>
    );

/* ================================= */
  // Learn About Self-Closing JSX Tags
  const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );


/* ================================= */
  // Create a Stateless Functional Component
  const MyComponent = function() {
    // change code below this line

    return (
      <div> I am a string</div>
    );

    // change code above this line
  }

/* ================================= */
  // Create a React Component

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line

   return (
        <div><h1>Hello React!</h1></div>
      );

      // change code above this line
    }
  };

/* ================================= */
  // Create a Component with Composition
  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };

  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* change code below this line */ }
          <ChildComponent />

          { /* change code above this line */ }
        </div>
      );
    }
  };

/* ================================= */
  // Use React to Render Nested Components
  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

  const Fruits = () => {
    return (
      <div>
        { /* change code below this line */ }
        <TypesOfFruit />
        { /* change code above this line */ }
      </div>
    );
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits />
          { /* change code above this line */ }
        </div>
      );
    }
  };

/* ================================= */
  // Compose React Components
  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* change code below this line */ }
          <NonCitrus />
          <Citrus />
           { /* change code above this line */ }
        </div>
      );
    }
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits />
          { /* change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };

/* ================================= */
  // Render a Class Component to the DOM

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* change code below this line */}
          <Fruits />
          <Vegetables />
          {/* change code above this line */}
        </div>
      );
    }
  };

  // change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

/* ================================= */
  // Write a React Component from Scratch
    // change code below this line

  class MyComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render() {
      return(
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    }
  }

    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

/* ================================= */
  // Pass Props to a Stateless Functional Component

  const CurrentDate = (props) => {
    return (
      <div>
        { /* change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* change code above this line */ }
      </div>
    );
  };

  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* change code below this line */ }
          <CurrentDate date = {Date()} />
          { /* change code above this line */ }
        </div>
      );
    }
  };

/* ================================= */
  // Pass an Array as Props
  const List= (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* change code above this line */ }
  };

  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* change code below this line */ }
          <List tasks = {["walk","dog","workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks = {["eating", "playing", "golf"]}/>
          { /* change code above this line */ }
        </div>
      );
    }
  };

/* ================================= */
  // Use Default Props
    const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // change code below this line
  ShoppingCart.defaultProps = { items: 0 }

/* ================================= */
  // Override Default Props
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }

  Items.defaultProps = {
    quantity: 0
  }

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }
      return <Items quantity = {10}/>
      { /* change code above this line */ }
    }
  };

/* ================================= */
  // Use PropTypes to Define the Props You Expect
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };

  // change code below this line
  Items.propTypes = { quantity: PropTypes.number.isRequired }
  // change code above this line

  Items.defaultProps = {
    quantity: 0
  };

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

/* ================================= */
  // Access Props Using this.props

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
  //

/* ================================= */
