import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import AddContactPage from './pages/AddContactPage';
import EditContactPage from './pages/EditContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/add" element={<AddContactPage />} />
        <Route path="/edit/:id" element={<EditContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;