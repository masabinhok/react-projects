import React from "react";
import { useEffect, useState } from "react";

export default function Practice() {
  const [color, setColor] = useState(0);
  const [count, setCount] = useState(0);

  //Case 1: I will run on every render
  useEffect(() => {
    alert("I will run on every render");
  });

  //Case 2: I will run only on first render
  useEffect(() => {
    alert("I will run only on first render");
  }, []);

  //Case 1: I will run only when something changes
  useEffect(() => {
    alert("I will run when something changes");
  }, [color]);

  return (
    <div>
      <button
        onClick={() => {
          setColor(color + 1);
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}
