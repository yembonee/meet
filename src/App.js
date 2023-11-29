import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <EventList />
      <CitySearch />
    </div>
  );
};

export default App;
