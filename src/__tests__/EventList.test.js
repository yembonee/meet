import { render, screen } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    render(<EventList />);
  });

  test('has an element with "list" role', () => {
    expect(screen.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    const { rerender } = await render(<EventList events={allEvents} />);
    await rerender(<EventList events={allEvents} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});
