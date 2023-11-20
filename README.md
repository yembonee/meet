# Meet React App

## Meet

## Overview

This is an app that is a progressive web application using React with a Test Driven development technique, using the Google Calendar Api to fetch upcoming events.

## Usage

With this Meet app, serverless functions are a prime foundation in making this application possible. It will be accessing the Google Calendar API, as well as using AWS Lambda for the cloud service provider. Users will have to be authorized in order to retrieve the given data within the app. Overall, being that this app is built with serverless functions, it will be more beneficial and efficient than other alternatives for creating a similar app. The serverless functions will also be making access tokens to provide more security to the app.

## Features

### Feature 1: Filter events by City

As a user I Should be able to filter events by the city.

### Scenario: User opens the app and has searched a city

- Given the user opens the events app
- When the user searches for events in "CityName"
- Then the app should display a list of events in "CityName"

### Scenario: User opens the app and hasn't searched a city

- Given the user opens the events app
- When the user does not search for any specific city
- Then the app should display a default list of events (perhaps based on the user's location or a default city)

### Feature 2: Show/Hide an Event Details

As a user I should be able to show or hide event details.

### Scenario: User can expand an event to see its details

- Given there is an event in the events list
- When the user chooses to view the details of the event
- Then the event details should be expanded and visible to the user

### Scenario: User can collapse an event to hide its details

- Given there is an expanded event with visible details
- When the user chooses to collapse the event
- Then the event details should be hidden from the user

### Feature 3: Specify Number of Events

As a user I should be able to specify the number of displayed events

### Scenario: When user hasn't specified a number, 32 is the default number

- Given the user is using the events app
- When the user does not specify the number of events to display
- Then the app should display a default of 32 events

### Scenario: User can change the number of events they want to see

- Given the user is using the events app
- When the user specifies a custom number of events to display
- Then the app should adjust and display the specified number of events

### Feature 4: Use the App When Offline

As a user, I should be able to get events' information when offline

### Scenario: Show cached data when there's no internet connection

- Given the user has previously used the events app and cached data is available
- When the user opens the app without an internet connection
- Then the app should display the cached data to the user

### Sceneraio: Show error when user changes the settings (city, time range)

- Given the user has previously used the events app and cached data is available, and the app is currently offline
- When the user attempts to change settings such as city or time range
- Then the app should display an error indicating that the changes cannot be made without an internet connection

### Feature 5: Add an App shortcut to the home screen

As a user I should be able to add a shortcut of the app to the home screen

### Scenario: User can install the meet app as a shortcut on their device home screen

- Given the user has the events app installed on their device
- When the user chooses to add a shortcut to the home screen
- Then the app should be added as a shortcut on the device's home screen

### Feature 6: Display charts visualizing event details

As a user I should be able to see a chart showing the upcoming events in each city

### Scenario: Show a chart with the number of upcoming events in each city

- Given there are upcoming events in multiple cities
- When the user selects the option to view a chart of upcoming events by city
- Then the app should display a chart visualizing the number of upcoming events in each city

## Dependencies

## Email if any questions

> yemsonidowu@gmail.com
