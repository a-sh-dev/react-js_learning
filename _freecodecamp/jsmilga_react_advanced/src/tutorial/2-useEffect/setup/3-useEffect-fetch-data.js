import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>fetch data</h3>
      <section>
        <h1>Github users</h1>
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>GitHub Profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default UseEffectFetchData;
