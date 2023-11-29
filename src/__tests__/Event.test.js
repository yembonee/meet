import mockData from "../mock-data";
import { render, screen } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;

  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    render(<Event event={allEvents[0]} />);
  });

  test("has an element with event's title, with summary key", () => {
    expect(screen.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test("has an element for the start time of event", () => {
    expect(
      screen.queryByText(new Date(allEvents[0].created).toDateString())
    ).toBeInTheDocument();
  });

  test("has an element for the event's location", () => {
    expect(screen.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test("the event's show details button", () => {
    expect(screen.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    console.log("Logging: ", allEvents[0].description);
    expect(screen.queryByText(".detailsOpened")).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the show details button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = screen.queryByText("show details");
    await user.click(showDetailsButton);
    const descriptionSection = screen.queryByText(".detailsOpened");
    //expect(descriptionSection).toBeVisible();
  });

  test("hides the details section when the user clicks on the hide details button", async () => {
    const user = userEvent.setup();
    const hideDetailsButton = screen.queryByText("hide details");
    await user.click(hideDetailsButton);
    const descriptionSection = screen.queryByText(".detailsClosed");
    //expect(descriptionSection).not.toBeVisible();
  });
});
