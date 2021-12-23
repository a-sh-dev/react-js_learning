import { useState } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { userUpdated } from './usersSlice';

const EditUser = () => {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace('/edit-user/', ''));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId),
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
        }),
      );
      // normalise and redirect to home
      setError(null);
      navigate('/');
    } else {
      setError("Inputs can't be blank");
    }
    // clear input fields
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit User</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Full Name"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="email@emailaddress.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button className="button-primary" onClick={handleClick}>
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
