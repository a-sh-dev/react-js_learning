import React, { useState, useEffect } from "react";

export function Section() {
  const [name, setName] = useState("Bobolita");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`Current user is: ${admin ? "admin" : "not admin"}`);
  }, [admin]);

  return (
    <section>
      <h2>
        <span>👻</span> useState Hook Samples
      </h2>
      <h3>
        Congratulations <em>{name}</em>!
      </h3>
      <button onClick={() => setName("Nyomilita")}>Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(true)}>Login</button>
    </section>
  );
}
