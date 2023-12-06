import { extractLocations, getEvents } from "./api";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <header>City and Event Search</header>
      <div className="search-elements">
        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
        />
        <NumberOfEvents setCurrentNOE={setCurrentNOE} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
