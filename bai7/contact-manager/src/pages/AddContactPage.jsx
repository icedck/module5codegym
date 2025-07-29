import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact, uploadImage } from "../api";

function AddContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const url = await uploadImage(e.target.files[0]);
    setForm({ ...form, image: url });
  };

  const handleSubmit = () => {
    addContact(form).then(() => {
      alert("Tạo thành công!");
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <input type="file" onChange={handleImageUpload} />
      {form.image && <img src={form.image} alt="" width="100" />}
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddContactPage;
