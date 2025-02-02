import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Main";

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

// Existing test for the BookingForm heading
test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText(/Book Now/i); // Updated regex to make it case-insensitive
    expect(headingElement).toBeInTheDocument();
});

// Test for initializeTimes function
test('initializeTimes returns the correct initial array of times', async () => {
    // Mock fetchAPI to return a specific set of times for testing
    global.fetchAPI = jest.fn().mockResolvedValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    
    // Call initializeTimes and wait for the promise to resolve
    const result = await initializeTimes();
  
    // Expected times array
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
    // Check that the result is equal to the expected times array
    expect(result).toEqual(expectedTimes);
  });

// Test for updateTimes function
test('updateTimes returns new times based on the provided date in the action', async () => {
    // Mock the global fetchAPI function to return different times based on the date
    global.fetchAPI = jest.fn().mockResolvedValueOnce(["17:30", "18:30", "19:30", "20:30", "21:30"]);
  
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
    // The action now includes a payload with a date
    const action = { type: "UPDATE_TIMES", payload: { date: "2024-12-01" } };
    
    // Call the updateTimes function with the initial state and the action
    const result = await updateTimes(initialState, action);
    
    // We expect the new times to be returned based on the mocked fetchAPI call
    const expectedTimes = ["17:30", "18:30", "19:30", "20:30", "21:30"];
    
    // Expect the result to be the updated times based on the fetchAPI mock
    expect(result).toEqual(expectedTimes);
  });
  

test('user can submit the form successfully and see the success message', () => {
    // Mock dispatch function
    const mockDispatch = jest.fn();

    render(<BookingForm dispatch={mockDispatch} />);

    // Fill in the date field
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2024-12-01' } });

    // Fill in the time field
    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    // Fill in the number of guests
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: 4 } });

    // Select an occasion
    const occasionButton = screen.getByText(/occasion/i); // Assuming "Occasion" text shows by default
    fireEvent.click(occasionButton); // Open dropdown
    const birthdayOption = screen.getByText(/birthday/i);
    fireEvent.click(birthdayOption); // Select "Birthday"

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    // Check that dispatch was called
    expect(mockDispatch).toHaveBeenCalledTimes(1); // Ensure the dispatch function was called at least once
});

test('user cannot submit the form with missing or invalid fields and sees appropriate validation error messages', () => {
    // Mock dispatch function
    const mockDispatch = jest.fn();
  
    render(<BookingForm dispatch={mockDispatch} availableTimes={["17:00", "18:00", "19:00", "20:00"]} />);
  
    // Simulate a submit with no fields filled
  
    // Do not fill in the date field (leave it empty)
    const dateInput = screen.getByLabelText(/choose date/i);
    
    // Do not fill in the time field (leave it empty)
    const timeSelect = screen.getByLabelText(/choose time/i);
  
    // Do not fill in the number of guests (leave it empty)
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    // Do not select an occasion (leave it as the default "Occasion")
    
    // Submit the form without completing all required fields
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);
  
    // Check that the dispatch function was NOT called
    expect(mockDispatch).not.toHaveBeenCalled();
  
    // Check for validation error messages
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
  });
  



