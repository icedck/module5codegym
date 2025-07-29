// src/components/EmployeeList.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const employees = [
  { id: 1, name: "Hoa", age: 20 },
  { id: 2, name: "Khánh", age: 25 },
  { id: 3, name: "Tú", age: 22 },
];

export default function EmployeeList() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "Unknown";

  const handleDetail = (employee) => {
    navigate(`/employee/${employee.id}`, { state: { employee } });
  };

  return (
    <div>
      <h2>Welcome, {email}</h2>
      <table border="1" cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>
                <button onClick={() => handleDetail(emp)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
