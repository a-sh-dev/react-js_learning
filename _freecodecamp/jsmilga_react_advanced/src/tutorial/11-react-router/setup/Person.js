import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [name, setName] = useState("person's name");
  const { id } = useParams();

  useEffect(() => {
    // due to useParams' id being string, it must be converted to number first
    const person = data.find((person) => person.id === parseInt(id));
    setName(person.name);
  }, [id]);

  return (
    <div>
      <h4>our people</h4>
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        consequuntur ducimus ipsum totam officiis, quia nesciunt deserunt eos
        minima. Blanditiis beatae fugit debitis nobis quo incidunt eaque tempore
        similique laborum nesciunt alias, animi sed nam optio aspernatur
        corrupti placeat voluptas et numquam, at nulla. Ex fugiat amet fugit
        maxime reiciendis.
      </p>
      <Link className="btn" to="/people">
        back to people
      </Link>
    </div>
  );
};

export default Person;
