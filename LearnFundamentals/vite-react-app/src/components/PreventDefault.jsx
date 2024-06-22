import React from "react";

export default function PreventDefault() {
  function handleClick () {
    alert("Default function prevented!");
    event.preventDefault();
  }
  return (
    <a
      onClick={handleClick}
      href="https://react.dev/learn/passing-props-to-a-component"
    >
      Click Here!
    </a>
  );
}
