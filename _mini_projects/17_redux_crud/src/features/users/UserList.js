import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userDeleted } from './usersSlice';

const UserList = () => {
  // Initialise access to states from Redux tore
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>⌨️ &nbsp; Redux CRUD User App</h1>
      </div>

      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load users</button>
        </div>
        <div className="two columns">
          <button className="button-primary">Add user</button>
        </div>
      </div>

      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, job }, index) => (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{job}</td>
                <td>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                  <Link to={`/edit-user/${id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
