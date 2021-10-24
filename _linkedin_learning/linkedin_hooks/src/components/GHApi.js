import React, { useEffect, useState } from "react";

export function Gh() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <h2>
          <span>☄️</span> Fetch with useEffect Hook
        </h2>
        <h4>List of random GitHub users</h4>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Clear List</button>
      </div>
    );
  }

  return <h3>No Uses Detected...</h3>;
}
