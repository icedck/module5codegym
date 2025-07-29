import { Formik } from 'formik'
import React, { useState } from 'react'
import './App.css'

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleValidate = () => {
    const errors = {};
    if(!form.name){
      errors.name = 'Required';
    }
    if(!form.email){
      errors.email = 'Required';
    }else if(!REGEX.email.test(form.email)){
      errors.email = 'Invalid email address';
    }
    if(!form.phone){
      errors.phone = 'Required';
    }
    return errors;
  }

  const handleSubmit = () => {
    alert("Login in successfully!!!");
  }

  return (
    <div>
      <h2>Contact Form</h2>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.mail ? "custom-input-error" : ""
              }`}
            >
              <label>Name</label>
              <input type="text" name="name" value={form.name || ""} onChange={handleChange} />
              <p className='error'>{errors.name}</p>
            </div>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>Email</label>
              <input type="email" name="email" value={form.email || ""} onChange={handleChange} />
              <p className='error'>{errors.email}</p>
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" value={form.phone || ""} onChange={handleChange} />
              <p className='error'>{errors.phone}</p>
            </div>
            <div>
              <label>Message</label>
              <textarea name="message" value={form.message || ""} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App
