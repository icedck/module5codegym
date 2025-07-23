import React,{Component} from "react";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      item: ""
    };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleAddItem = () => {
    if (this.state.item.trim() !== "") {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.item],
        item: ""
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input 
          type="text" 
          value={this.state.item} 
          onChange={this.handleChange} 
          placeholder="Add a new item" 
        />
        <button onClick={this.handleAddItem}>Add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}