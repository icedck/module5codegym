import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContactById, updateContact, uploadImage } from "../api";

function EditContactPage() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getContactById(id).then((res) => setForm(res.data));
  }, [id]);

  const handleImageUpload = async (e) => {
    const url = await uploadImage(e.target.files[0]);
    setForm({ ...form, image: url });
  };

  const handleSubmit = () => {
    updateContact(id, form).then(() => {
      alert("Cập nhật thành công!");
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <input type="file" onChange={handleImageUpload} />
      {form.image && <img src={form.image} alt="" width="100" />}
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default EditContactPage;
