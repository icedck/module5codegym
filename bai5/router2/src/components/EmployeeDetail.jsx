import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function EmployeeDetail() {
  const location = useLocation();
  const { employee } = location.state || {};
  const { id } = useParams();

  if (!employee) {
    return <div>Không tìm thấy dữ liệu cho nhân viên ID: {id}</div>;
  }

  return (
    <div>
      <h2>Employee Detail</h2>
      <p>
        <strong>ID:</strong> {employee.id}
      </p>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Age:</strong> {employee.age}
      </p>
    </div>
  );
}
