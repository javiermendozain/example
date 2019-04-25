
// Dependencies
import React, { Component } from 'react';

// Assets
import './css/Content.css';

class Content extends Component {

  constructor() {
    super();

    this.state = {
      acount: 0,
      num1: 0,
      num2: 0,
      resul: ''
    };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }
  /*
  componentDidMount() {
    this.setState({
      acount: 1,
      num1:0,
      num2:0
    });    
  }*/

  handleCountClick(e) {
    switch (e.target.id) {
      case 'add':
        this.setState({ acount: this.state.acount + 1 });
        break;
      case 'subtract':
        if (this.state.acount > 0) {
          this.setState({ acount: this.state.acount - 1 });
        }
        break;
      case 'reset':
        this.setState({ acount: 0, resul: '' });
        break;
    }
  }

  handleResultClick(e) {
    this.setState({
      resul: this.state.num1 + this.state.num2
    });

  }

  handleInputChanged(e) {
    switch (e.target.id) {
      case 'num1':
        this.setState({ num1: Number(e.target.value) });
        break;
      case 'num2':
        this.setState({ num2: Number(e.target.value) });
    }
  }

  render() {
    return (
      <div className="Content">

        <h2>counter: {this.state.acount}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>

          <button id="subtract" onClick={this.handleCountClick}>-</button>

          <button id="reset" onClick={this.handleCountClick}>reset</button>
        </p>
        <p>
          Calulator
        </p>
        <p>
          <input id="num1" type="number" value={this.state.num1} onChange={this.handleInputChanged} />
          +
          <input id="num2" type="number" value={this.state.num2} onChange={this.handleInputChanged} />
          <button id="result" onClick={this.handleResultClick}>=</button>
         {this.state.resul}
        </p>
      </div>
    );
  }
}

export default Content;
