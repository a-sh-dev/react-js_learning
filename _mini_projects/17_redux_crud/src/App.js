import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './features/users/UserList';
import EditUser from './features/users/EditUser';
import AddUser from './features/users/AddUser';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/">
            <Route path="/" element={<UserList />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="edit-user" element={<EditUser />} />
            <Route path="edit-user/:id" element={<EditUser />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
