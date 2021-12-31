import React, { useState, useEffect } from 'react';
import { Button, Input, PasswordInput, Spinner } from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 5px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
    font-size: 0.9rem;
  }

  .intro {
    line-height: 1.5rem;
    font-weight: 400;
  }

  /* Direct reference of any child components */
  > ${Button}:first-of-type {
    margin-top: 20px;
  }

  > ${Input} {
    margin-top: 10px;
  }
`;

const defaultFormFields = {
  username: '',
  password: '',
};

// Initialise timeout for loading state
let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    e.persist();
    setFormFields((input) => ({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <p className="intro">
              For an existing account, please enter details
            </p>
            <Input
              name="username"
              placeholder="Username"
              type="text"
              value={formFields.username}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="password"
              value={formFields.password}
              onChange={handleInputChange}
            />
          </>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">Don't have an account yet?</div>
            <Button type="button" secondary>
              Register
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}
