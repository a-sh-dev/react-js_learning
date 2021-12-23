import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './features/users/UserList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/">
            <Route path="/" element={<UserList />} />
            <Route path="add-user" element={<h1>Add User</h1>} />
            <Route path="edit-user" element={<h1>Edit User</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
