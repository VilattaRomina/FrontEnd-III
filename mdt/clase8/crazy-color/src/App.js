import './App.css';
import Button from './Button'
import React, { Component } from 'react'


export default class App extends Component {

   state = {
      colors: [
        "RED",
        "BLUE",
        "YELLOW",
        "GREEN",
        "ORANGE",
        "MAGENTA",
        "BROWN",
        "LIME",
      ],
    };
   
  
  shuffle = () =>{
    this.setState({colors: this.state.colors.sort((a, b)=> Math.random()-0.5)})
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>
      

    )
  }
}




