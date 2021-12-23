import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAdded } from './usersSlice';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const usersAmount = useSelector((state) => state.users.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
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
        <h1>Add User</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label for="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Full Name"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label for="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="email@emailaddress.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button className="button-primary" onclick={handleClick}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
