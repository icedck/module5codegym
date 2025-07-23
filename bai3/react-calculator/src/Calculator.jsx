import React, { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: ''
        };
    }
    render() {
        return (
            <div>
                <h1>Simple Calculator</h1>
                <input type="number" value={this.state.num1} onChange={(e) => this.setState({ num1: e.target.value })} placeholder="Enter first number" />
                <input type="number" value={this.state.num2} onChange={(e) => this.setState({ num2: e.target.value })} placeholder="Enter second number" />
                <button onClick={() => this.props.onAdd(this.state.num1, this.state.num2)}>+</button>
                <button onClick={() => this.props.onSubtract(this.state.num1, this.state.num2)}>-</button>
                <button onClick={() => this.props.onMultiply(this.state.num1, this.state.num2)}>*</button>
                <button onClick={() => this.props.onDivide(this.state.num1, this.state.num2)}>/</button>
            </div>
        );
    }
}

export default Calculator;
