import React, { useState } from "react";
import { myPeople } from "./data.js";
import "./myPeople.css";
const People = () => {
  const [people, setPeople] = useState(myPeople);
  const removePerson = (id) => {
    const singlePerson = people.filter((meraPerson) => meraPerson.id !== id);
    setPeople(singlePerson);
  };
  return (
    <div className="people">
      <h1>People : {people.length}</h1>
      {people.map((merePeople) => {
        return (
          <div className="myPeople" key={merePeople.id}>
            <div className="content">
              <h2>{merePeople.name}:</h2>
              <h2 className="age">{merePeople.age}</h2>
            </div>
            <button
              onClick={() => removePerson(merePeople.id)}
              className="removeBtn"
            >
              Remove
            </button>
          </div>
        );
      })}
      <button className="clearBtn" onClick={() => setPeople([])}>
        Clear
      </button>
    </div>
  );
};

export default People;
