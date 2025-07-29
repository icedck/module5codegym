import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employee/:id" element={<EmployeeDetail />} />
    </Routes>
  );
}

export default App;
