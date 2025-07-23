import React, {Component} from "react";

class StudentInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student : [
        {id: 1, name: "John Doe", age: 20, address: "123 Main St"},
        {id: 2, name: "Jane Smith", age: 22, address: "456 Elm St"},
        {id: 3, name: "Sam Brown", age: 19, address: "789 Oak St"}
      ]
    };
  }
    render() {
    return (
        <div style={{padding: "20px"}}>
          <h2>Student Information</h2>
          <table style={{width: "100%", borderCollapse: "collapse", border: "1px solid white"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {this.state.student.map((student)=>(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
  }
}

export default StudentInfoComponent;
