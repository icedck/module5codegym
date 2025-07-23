import React, {Component} from "react";
import Home from "./Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render(){
      const { isLoggedIn } = this.state;
      if (isLoggedIn) return(<Home logout={this.handleLogout}/>)
      return(
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <h1>Welcome to the Login Page</h1>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      )
  }
}