import React, {Component} from "react";
import Calculator from "./Calculator";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  handleAddition = (num1, num2) => {
    const result = parseFloat(num1) + parseFloat(num2);
    this.setState({ result });
  };

  handleSubtraction = (num1, num2) => {
    const result = parseFloat(num1) - parseFloat(num2);
    this.setState({ result });
  };

  handleMultiplication = (num1, num2) => {
    const result = parseFloat(num1) * parseFloat(num2);
    this.setState({ result });
  };

  handleDivision = (num1, num2) => {
    const result = parseFloat(num1) / parseFloat(num2);
    this.setState({ result });
  };

  render() {
    return (
      <div>
        <Calculator
          onAdd={this.handleAddition}
          onSubtract={this.handleSubtraction}
          onMultiply={this.handleMultiplication}
          onDivide={this.handleDivision}
        />
        {this.state.result !== null && (
          <h2>Result: {this.state.result}</h2>
        )}
      </div>
    );
  }
}