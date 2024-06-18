import React from 'react';

function EventInfo() {
  const handleClick = (event) => {
    console.log(event); // SyntheticEvent
    console.log(event.nativeEvent); // Native browser event
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default EventInfo;
