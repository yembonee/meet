import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Please enter a valid number greater than 0.";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Shown Events: </label>
      <input
        type="text"
        placeholder="Enter a Number"
        id="number-of-events-input"
        className="number-of-events-input"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
