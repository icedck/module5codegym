import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }

  handleExpand = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand
    }));
  };

  render(){
    return (
      <>
        <div
          style={{
            backgroundColor: "lightblue",
            padding: "20px",
            color: "white",
          }}
        >
          <h1>Conditional Rendering</h1>
        </div>

        <div style={{ padding: "20px" }}>
          <button onClick={this.handleExpand}>
            {this.state.isExpand ? "Đóng" : "Mở"}
          </button>
          {this.state.isExpand && (
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "lightgreen",
                padding: "10px",
              }}
            >
              <h2>Giới thiệu</h2>
              <p>
                Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào
                từng điều kiện ví dụ như trạng thái của state, props,... mà bạn
                muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có
                thể sử dụng Conditional rendering để render ra component mà bạn
                mong muốn.
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;