import React, { Component } from "react";
import axios from "axios";

export default class Lib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
      )
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleCreate = () => {
    window.location.href = "book/create";
  };

  handleUpdate = (id) => {
    window.location.href = `book/update/${id}`;
  };

  handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sách này?")) {
      axios
        .delete(
          `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`
        )
        .then(() => {
          this.setState({
            books: this.state.books.filter((book) => book.id !== id),
          });
          alert("Xóa sách thành công!");
        })
        .catch((err) => {
          console.log("Lỗi khi xóa sách:", err);
          alert("Có lỗi xảy ra khi xóa sách. Vui lòng thử lại!");
        });
    }
  };

  render() {
    const { books } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Danh Sách Sách</h1>
        <button
          type="button"
          onClick={this.handleCreate}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Tạo sách mới
        </button>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f8f9fa" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Tên sách
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Số lượng
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>{book.title}</td>
                <td style={{ padding: "12px" }}>{book.quantity}</td>
                <td style={{ padding: "12px" }}>
                  <button
                    type="button"
                    onClick={() => this.handleUpdate(book.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    onClick={() => this.handleDelete(book.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {books.length === 0 && (
          <p style={{ textAlign: "center", color: "#666", marginTop: "20px" }}>
            Không có sách nào trong danh sách
          </p>
        )}
      </div>
    );
  }
}
