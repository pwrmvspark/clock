import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return(
      <div>
        <Clock />
      </div>
    )
  }
}

class Clock extends Component {
  constructor() {
    super()
      this.state = {
        time: new Date()
      }
    
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
    <div>
      <h1 className="header"> Current time using state && component lifecycle methods </h1>
      <h2 className="header"> It is {this.state.time.toLocaleTimeString()} </h2>
    </div>
    )  
  }
}

export default App;
