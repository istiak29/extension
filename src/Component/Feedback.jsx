import React, { useState } from 'react';

const Feedback = () => {
    // State to store selected values for each category
    const [feedback, setFeedback] = useState({
        productQuality: '',
        payment: '',
        service: '',
    });

    const [submitted, setSubmitted] = useState(false); // State to track if feedback has been submitted

    // Update the selected value when user clicks on an option
    const handleSelect = (category, value) => {
        setFeedback((prevState) => ({ ...prevState, [category]: value }));
    };

    // Handle form submission
    const handleSubmit = () => {
        setSubmitted(true); // Set the submitted state to true
    };

    return (
        <div className="flex flex-col items-center mt-5">
            {/* Feedback categories */}
            <div className="flex justify-evenly w-full mb-5">
                {/* Product Quality Selector */}
                <div className="category">
                    <h3 className="font-bold mb-2">Product Quality</h3>
                    <div className="flex flex-col gap-2">
                        {['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'].map((option) => (
                            <button
                                key={option}
                                className={`btn ${feedback.productQuality === option ? 'btn-primary' : 'btn-outline'
                                    }`}
                                onClick={() => handleSelect('productQuality', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Payment Selector */}
                <div className="category">
                    <h3 className="font-bold mb-2">Payment</h3>
                    <div className="flex flex-col gap-2">
                        {['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'].map((option) => (
                            <button
                                key={option}
                                className={`btn ${feedback.payment === option ? 'btn-primary' : 'btn-outline'
                                    }`}
                                onClick={() => handleSelect('payment', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Service Selector */}
                <div className="category">
                    <h3 className="font-bold mb-2">Service</h3>
                    <div className="flex flex-col gap-2">
                        {['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'].map((option) => (
                            <button
                                key={option}
                                className={`btn ${feedback.service === option ? 'btn-primary' : 'btn-outline'
                                    }`}
                                onClick={() => handleSelect('service', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button className="btn btn-success" onClick={handleSubmit}>
                Submit
            </button>

            {/* Display selected feedback after submission */}
            {submitted && (
                <div className="mt-5">
                    <h3 className="font-bold mb-2">Submitted Feedback:</h3>
                    <p>Product Quality: {feedback.productQuality}</p>
                    <p>Payment: {feedback.payment}</p>
                    <p>Service: {feedback.service}</p>
                </div>
            )}
        </div>
    );
};

export default Feedback;
