/* global fetchAPI */

import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { useReducer } from 'react';

// Function to initialize available times using fetchAPI
export const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date); // Use fetchAPI to fetch times
};

// Function to update available times based on the selected date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Logic for updating times based on the date can go here.
      const date = action.payload.date;
      const newDateObject = new Date(date)
      console.log(newDateObject);
      // For now, returning the same times for all dates.
      return fetchAPI(newDateObject);
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
