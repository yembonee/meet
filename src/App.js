import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useState, useEffect } from "react";

const App = () => {
  const [events, setEvents] = useState([]);

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
};

export default App;
