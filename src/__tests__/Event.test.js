import "../mock-data";
import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;

  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(async () => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("has an element with event's title, with summary key", () => {
    console.log("Logging: ", allEvents[0]);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  /* test("has an element for the start time of event", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });
  */

  test("has an element for the event's location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("the event's show details button", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    console.log("Logging: ", allEvents[0].description);
    expect(
      EventComponent.container.querySelector(".detailsOpened")
    ).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the show details button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    const descriptionSection =
      EventComponent.container.querySelector(".detailsOpened");
    expect(descriptionSection).toBeVisible();
  });

  test("hides the details section when the user clicks on the hide details button", async () => {
    const user = userEvent.setup();
    const hideDetailsButton = EventComponent.queryByText("hide details");
    await user.click(hideDetailsButton);
    const descriptionSection =
      EventComponent.container.querySelector(".detailsClosed");
    expect(descriptionSection).not.toBeVisible();
  });
});
