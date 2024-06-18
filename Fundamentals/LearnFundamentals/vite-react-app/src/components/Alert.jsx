import React from "react";

export default function Alert(props) {
  const status = props.status;
  let message;

  switch (status) {
    case "success":
      message = <h1>Operation was successful!</h1>;
      break;

    case "error":
      message = <h1>Something went wrong</h1>;
      break;

    case "loading":
      message = <h1>Loading...</h1>;
      break;

    default:
      message = <h1>Unknown status</h1>;
  }

  return <div>{message}</div>;
}
