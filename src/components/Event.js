import { useState } from "react";
import mockData from "../mock-data";
import { getEvents } from "../api";

const Event = ({ event }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const eventDate = new Date(event.created).toDateString();

  return (
    <li className="event">
      <div className="event-title">{event.summary}</div>
      <div className="event-infos">
        <div>{eventDate}</div>
        <div>{event.location}</div>
      </div>
      {isDetailsOpen ? (
        <details open={true} className="detailsOpened">
          <summary> </summary>
          <p> {event.description} </p>
        </details>
      ) : (
        <details open={false} className="detailsClosed">
          <summary> </summary>
          <p> {event.description} </p>
        </details>
      )}

      <div className="details-btn">
        {isDetailsOpen ? (
          <button
            className="hide-details"
            onClick={() => {
              setIsDetailsOpen(false);
            }}
          >
            hide details
          </button>
        ) : (
          <button
            className="show-details"
            onClick={() => {
              setIsDetailsOpen(true);
            }}
          >
            show details
          </button>
        )}
      </div>
    </li>
  );
};

export default Event;
