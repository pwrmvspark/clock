import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Clock />
      </div>
    );
  }
}

class Clock extends Component {
  constructor() {
    super()
      this.state = {
        time: new Date()
      };
    
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
    <div>
      <h1>This is the current time sucka!</h1>
      <h2>It is {this.state.time.toLocaleTimeString()}</h2>
    </div>
    )  
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
