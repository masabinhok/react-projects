//Function Components
import React from "react";
import "./styles.css";
import styles from "./FunctionComponents.module.css";
import { useState } from "react";

//function componennts are a simpler way to write components that only contain a render method and dont have any state. they accept props as an argument and return a jsx.
export default function Greeting(props) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  //writing jsx: jsx is a syntax extension that allows you to write HTML directly within js.

  // const element = <h1 className={styles.welcome}>Hello, {props.name}</h1>; //jsx
  return (
    <>
      <h1 className="welcome">Hello, {props.name}</h1>
      <p
        style={{
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Age: {props.age}
      </p>
      <span className={styles.module}>CSS module</span>
      <button onClick={handleClick}>Count: {count}</button>
    </>
  ); //<>This is a react fragment, basically a wrapper for jsx</>
}
