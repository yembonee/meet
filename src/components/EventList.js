import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events ? events.map((event) => <Event key={event.id} />) : null}
    </ul>
  );
};

export default EventList;
