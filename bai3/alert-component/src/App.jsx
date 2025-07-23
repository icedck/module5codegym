import React, {Component} from "react";
import {Alert} from "./Alert";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Application</h1>
        <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      </div>
    );
  }
}

export default App;
