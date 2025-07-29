import React, { useState } from 'react'
import { Formik } from 'formik'
import './App.css'

function App() {
  const [book, setBook] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleValidate = () => {
    const errors = {};
    if(!form.title){
      errors.title = 'Required';
    }
    if(!form.number){
      errors.number = 'Required';
    }
    return errors;
  }

  const handleSelect = (book, indexSelected) =>{
    setForm(book);
    setIndexSelected(indexSelected);
  }

  const handleDelete = (indexSelected) => {
    const newBooks = JSON.parse(JSON.stringify(book));
    newBooks.splice(indexSelected, 1);
    setBook(newBooks);
  }

  const handleSubmit = () => {
    const newBooks = JSON.parse(JSON.stringify(book));
    if(indexSelected > -1){
      newBooks.splice(indexSelected, 1, form);
    }else{
      newBooks.push(form);
    }
    setBook(newBooks);
    setForm({});
    setIndexSelected(-1);
  }

  return (
    <div>
      <h2>Lib</h2>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.title ? "custom-input-error" : ""
              }`}
            >
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={form.title || ""}
                placeholder="Title"
              />
              <p className="custom-input-error-message">{errors.title}</p>
            </div>
            <div
              className={`custom-input ${
                errors.number ? "custom-input-error" : ""
              }`}
            >
              <input
                type="number"
                name="number"
                onChange={handleChange}
                value={form.number || ""}
                placeholder="Number"
              />
              <p className='custom-input-error-message'>{errors.number}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {book.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.number}</td>
              <td>
                <button onClick={() => handleSelect(book, index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App