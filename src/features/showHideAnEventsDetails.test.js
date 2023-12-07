import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("the user has selected a location to search for events", () => {
      AppComponent = render(<App />);
    });

    when("the list of local events for that location loads", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the event elements will collapse.", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the list of events is displayed,", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("the user clicks on show details", async () => {
      const button = AppComponent.queryAllByText("Show Details")[0];

      await userEvent.click(button);
    });

    then("the event details will be displayed.", () => {
      const EventDOM = AppComponent.container.firstChild;

      const description = EventDOM.querySelector(".description");
      expect(description).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;

    given(
      "the user has all the information they need about an event,",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });

        button = AppComponent.queryAllByText("Show Details")[0];
        await userEvent.click(button);

        const EventDOM = AppComponent.container.firstChild;
        const description = EventDOM.querySelector(".description");

        expect(description).toBeInTheDocument();
      }
    );

    when("the user clicks hide details", async () => {
      await userEvent.click(button);
    });

    then("the event details will be hidden.", () => {
      const EventDOM = AppComponent.container.firstChild;
      const description = EventDOM.querySelector(".description");
      expect(description).not.toBeInTheDocument();
    });
  });
});
