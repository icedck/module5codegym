import React, { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    const isValid = form.username && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
  }

  return (
    <div>
      <h1>Sign in</h1>
      <div className='custom-input'>
        <label>Username</label>
        <input type="text" name="username" value={form.username || ""} onChange={handleChange} />
      </div>
      <div className='custom-input'>
        <label>Email</label>
        <input type="email" name="email" value={form.email || ""} onChange={handleChange} />
      </div>
      <div className='custom-input'>
        <label>Password</label>
        <input type="password" name="password" value={form.password || ""} onChange={handleChange} />
      </div>
      <div className='custom-input'>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword || ""} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
