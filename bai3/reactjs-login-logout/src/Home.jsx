import React, {Component} from "react";
export default class Home extends Component {
    render() {
        return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Welcome to the Home Page</h1>
            <button onClick={this.props.logout}>Logout</button>
        </div>
        );
    }
}
