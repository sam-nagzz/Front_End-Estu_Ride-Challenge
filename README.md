# Simple Airbnb-Style Reservation System with Weather Information

## Overview
This project is a basic web application that simulates an Airbnb-style reservation system for a single room. It displays current reservations, shows the current weather using a public API, and allows users to make new reservations. The application also handles booking conflicts for dates that are already booked.

---

## Requirements

### User Interface
- Develop a simple UI using HTML and CSS.
- Include:
  - A section to display current weather using a public API.
  - A reservation form with a date picker and number of guests input (1-4).
  - A display area for current reservations.

### Functionality and API Integration
- Use JavaScript for interactivity and logic.
- Integrate a public weather API (like OpenWeatherMap) for current weather data.
- Display a list of current reservations (use pre-set data).

### Reservation Logic
- Allow users to submit reservation requests.
- Check for booking conflicts against current reservations.
- Display error messages for booking conflicts.
- Display a confirmation message for successful reservations.

### Simplified Data Handling
- Use a JavaScript array to store and display reservations.
- No backend or database is required.

---

## Evaluation Criteria
- Code organization and clarity.
- Functionality and correctness.
- UI/UX design.
- Error handling and data display.

---

# Steps to Book

## Check Weather
Refer to the current weather displayed on the homepage to help plan your stay. Review the current reservations list to check the availability of rooms for your prefered dates.

## Select Your Stay Details
Use the date picker to select your desired check-in date. The system will prevent you from selecting dates that have already passed. Choose the number of guests from the dropdown menu (options range from 1 to 4 guests).

## Explore Rooms
Browse through the available rooms displayed on the platform. View al least three photos of each room by clicking on the photo carousel to cycle through them. Read the brief description provided for each room to get an idea of the amenities and features.

## Select Your Room
Choose your desired room based on the photos and information provided. Click on the room to hightlight your chosen room.

## Submit Your Reservation Request
After filling out the form with the date, number of guests, and selected room, click the 'Book' button to submit your reservation request.
- If your selected date is already reserved for the chosen room, an error message will display, prompting you to choose another one.
- If the date is available, your reservation will be confirmed, and a confirmation message will be display.

## Review Your Reservation
Your booking details will now be visible in the current reservations area. Confirm that all details are correct.

With your booking confirmed, you can now prepare for your stay.

### Note
Please note that this system is a simulation and no actual room booking will be processed.

---

## Submission
Share the link to your forked repository as your submission.

---

## Note
Remember, this is a basic implementation for educational purposes. No real reservations will be processed.
