import { useState } from 'react'
import { Formik } from 'formik'
import './App.css'

function App() {
  const REGEX = {
    to: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const [form, setForm] = useState({});
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFile = (e) => {
    const filesArray = Array.from(e.target.files);
    setFiles(filesArray);
  };

  const handleValidate = () => {
    const errors = {};
    if (!form.to) {
      errors.to = 'Required';
    } else if (!REGEX.to.test(form.to)) {
      errors.to = 'Invalid email address';
    }
    if(!form.title) {
      errors.title = 'Required';
    }
    if(!form.message) {
      errors.message = 'Required';
    }
    return errors;
  };

  const handleSubmit = () => {
    alert('Sent successfully!!!')
  };

  return (
    <div>
      <h2>Mail Form</h2>
      <Formik
        initialValues={{
          to: "",
          title: "",
          message: "",
          files: [],
        }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.to ? "custom-input-error" : ""
              }`}
            >
              <label>To:</label>
              <input type="email" value={form.to || ""} name="to" onChange={handleChange} />
              {errors.to && <p className="error">{errors.to}</p>}
            </div>
            <div
              className={`custom-input ${
                errors.title ? "custom-input-error" : ""
              }`}
            >
              <label>Title:</label>
              <input
                type="text"
                value={form.title || ""}
                name="title"
                onChange={handleChange}
              />
              {errors.title && <p className="error">{errors.title}</p>}
            </div>
            <div
              className={`custom-input ${
                errors.message ? "custom-input-error" : ""
              }`}
            >
              <label>Message:</label>
              <textarea value={form.message || ""} name="message" onChange={handleChange} />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div>
              <label>Files:</label>
              <input
                type="file"
                name="files"
                multiple
                onChange={handleChangeFile}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App
