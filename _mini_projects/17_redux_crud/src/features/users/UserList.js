import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, userDeleted } from './usersSlice';

const UserList = () => {
  // Initialise access to states from Redux tore
  const dispatch = useDispatch();

  const { loading, entities } = useSelector((state) => state.users);

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
          <button
            className="button-primary"
            onClick={() => dispatch(fetchUsers())}
          >
            Load users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>

      <div className="row">
        {loading ? (
          'Loading...'
        ) : (
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
              {entities.map(({ id, name, email }, index) => (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <Link to={`edit-user/${id}`}>
                      <button>Edit</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserList;
