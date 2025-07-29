import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BookUpdate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`
      )
      .then((response) => {
        setTitle(response.data.title);
        setQuantity(response.data.quantity);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!title.trim()) {
      alert("Vui lòng nhập tên sách!");
      return;
    }
    
    if (!quantity || quantity <= 0) {
      alert("Vui lòng nhập số lượng hợp lệ!");
      return;
    }
    
    axios
      .put(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`,
        {
          title: title.trim(),
          quantity: Number(quantity),
        }
      )
      .then((response) => {
        console.log("Cập nhật sách thành công:", response.data);
        alert("Cập nhật sách thành công!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Lỗi khi cập nhật sách:", error);
        alert("Có lỗi xảy ra khi cập nhật sách. Vui lòng thử lại!");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cập Nhật Sách</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <div>
          <label>Tên sách:</label>
          <input
            type="text"
            value={title || ""}
            onChange={(event) => setTitle(event.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Nhập tên sách..."
          />
        </div>
        <div>
          <label>Số lượng:</label>
          <input
            type="number"
            value={quantity || ""}
            onChange={(event) => setQuantity(event.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Nhập số lượng..."
            min="1"
          />
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Cập nhật
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{ padding: "10px 20px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Quay lại
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookUpdate;
