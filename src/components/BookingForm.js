/* global submitAPI */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cheers, CaretDown, CaretUp } from "@phosphor-icons/react";

const BookingForm = ({ availableTimes, dispatch }) => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Occasion",
    });

    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
   
        if (id === "date") {
            dispatch({ type: "UPDATE_TIMES", payload: { date: value } });
        }
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleOccasionSelect = (occasion) => {
        setFormData((prevData) => ({
            ...prevData,
            occasion: occasion,
        }));
        setIsOpen(false);
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.date) errors.date = "Date is required";
        if (!formData.time) errors.time = "Time is required";
        if (!formData.guests) errors.guests = "Number of guests is required";
        if (formData.guests < 1 || formData.guests > 10)
            errors.guests = "Number of guests should be between 1 and 10";
        if (formData.occasion === "Occasion") errors.occasion = "Please select an occasion";

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
          setFormErrors(errors);
          return;
        }
      
        // Submit the form
        const submissionSuccess = submitAPI(formData);
        if (submissionSuccess) {
          setIsSubmitted(true);  // Set form as submitted
          setFormErrors({});  // Clear any errors
          navigate("/confirmed"); // Navigate after submission
        }
      };

    return (
        <section className="booking">
            <form onSubmit={handleSubmit} noValidate>
                <h2 className="header">Book Now</h2>
                {/* Date Input */}
                <label htmlFor="date">Choose date</label>
                <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                {formErrors.date && <span className="error" aria-live="assertive">{formErrors.date}</span>}

                {/* Time Input */}
                <label htmlFor="time">Choose time</label>
                <select
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    aria-label="Choose a time for your reservation"
                >
                    <option value="">-- Select Time --</option>
                    {(availableTimes || []).map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                {formErrors.time && <span className="error" aria-live="assertive">{formErrors.time}</span>}

                {/* Guests Input */}
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    aria-describedby="guests-help"
                />
                {formErrors.guests && <span className="error" aria-live="assertive">{formErrors.guests}</span>}

                <div className="custom-dropdown">
                    <button
                        className="dropdown-toggle"
                        onClick={toggleDropdown}
                        aria-expanded={isOpen}
                        aria-controls="occasion-menu"
                    >
                        <i><Cheers size={32} /></i>
                        <span>{formData.occasion}</span>
                        <i>{isOpen ? <CaretUp size={32} /> : <CaretDown size={32} />}</i>
                    </button>
                    {isOpen && (
                        <div
                            id="occasion-menu"
                            className="dropdown-menu"
                            role="menu"
                            aria-labelledby="occasion-button"
                        >
                            <div
                                className="dropdown-item"
                                onClick={() => handleOccasionSelect("Birthday")}
                                role="menuitem"
                                tabIndex="0"
                            >
                                Birthday
                            </div>
                            <div
                                className="dropdown-item"
                                onClick={() => handleOccasionSelect("Anniversary")}
                                role="menuitem"
                                tabIndex="0"
                            >
                                Anniversary
                            </div>
                        </div>
                    )}
                </div>
                {formErrors.occasion && <span className="error" aria-live="assertive">{formErrors.occasion}</span>}

                {/* Submit Button */}
                <input className="submit" type="submit" value="Make Your Reservation" />
            </form>
        </section>
    );
};

export default BookingForm;

