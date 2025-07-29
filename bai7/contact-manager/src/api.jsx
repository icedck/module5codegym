import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts";

export const getContacts = () => axios.get(BASE_URL);
export const getContactById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addContact = (contact) => axios.post(BASE_URL, contact);
export const updateContact = (id, contact) =>
  axios.put(`${BASE_URL}/${id}`, contact);
export const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);
export const uploadImage = (file) => {
  const fd = new FormData();
  fd.append("file", file);
  return axios
    .post("https://v2.convertapi.com/upload", fd)
    .then((res) => res.data.Url);
};
