import React, {Component} from "react";

class Hello extends Component {
    componentWillUnmount() {
        alert("Component is being removed from the DOM");
    }

    render() {
        return <h1>Hello!!!</h1>
    }
}

export default Hello;