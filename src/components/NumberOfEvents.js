import { useState } from "react";

const NumberOfEvents = () => {
  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        placeholder="Enter a Number"
        id="number-of-events-input"
        className="number-of-events-input"
        defaultValue={32}
      />
    </div>
  );
};

export default NumberOfEvents;
