import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContacts, deleteContact } from "../api";

function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteContact(id).then(() => {
      alert("Xóa thành công!");
      setContacts(contacts.filter((c) => c.id !== id));
    });
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={() => navigate("/add")}>Add Contact</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td>
                <img src={c.image} alt="" width="50" /> {c.name}
              </td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => navigate(`/edit/${c.id}`)}>Edit</button>
                <button onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsPage;
