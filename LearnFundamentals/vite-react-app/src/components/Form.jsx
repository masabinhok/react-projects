import React from "react";
import { useState } from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

export default function Form({ initialName, initialAge }) {
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);

  function handleNameChange(event) {
    const name = event.target.value;
    setName(name);
  }
  function handleAgeChange(event) {
    const age = event.target.value;
    setAge(age);
  }

  return (
    <>
      <form>
        <label value={name} htmlFor="name" onChange={handleNameChange}>
          <input type="text" />
        </label>
        <label onChange={handleAgeChange} value={age} htmlFor="age">
          <input type="number" />
        </label>
        <p>
          My name is {name} and I am {age} years old.
        </p>
      </form>

      {name ? <UserGreeting name={name} /> : <GuestGreeting />}
    </>
  );
}
