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

    // Handle form submission (for now, just show a success message)
    const handleSubmit = () => {
        setSubmitted(true); // Show success message after submission
    };

    return (
        <div className="max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Feedback Form</h2>

            {/* Feedback categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product Quality Selector */}
                <div className="category">
                    <h3 className="text-lg font-semibold mb-3 text-center">Product Quality</h3>
                    <div className="flex flex-col gap-2">
                        {['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'].map((option) => (
                            <button
                                key={option}
                                className={`btn w-full ${feedback.productQuality === option ? 'btn-primary' : 'btn-outline'
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
                    <h3 className="text-lg font-semibold mb-3 text-center">Payment</h3>
                    <div className="flex flex-col gap-2">
                        {['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'].map((option) => (
                            <button
                                key={option}
                                className={`btn w-full ${feedback.payment === option ? 'btn-primary' : 'btn-outline'
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
                    <h3 className="text-lg font-semibold mb-3 text-center">Service</h3>
                    <div className="flex flex-col gap-2">
                        {['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'].map((option) => (
                            <button
                                key={option}
                                className={`btn w-full ${feedback.service === option ? 'btn-primary' : 'btn-outline'
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
            <div className="flex justify-center mt-6">
                <button className="btn btn-success w-full md:w-1/2" onClick={handleSubmit}>
                    Submit Feedback
                </button>
            </div>

            {/* Display submission status */}
            {submitted && (
                <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-green-600">Thank you for your feedback!</h3>
                    <p>Product Quality: {feedback.productQuality}</p>
                    <p>Payment: {feedback.payment}</p>
                    <p>Service: {feedback.service}</p>
                </div>
            )}
        </div>
    );
};

export default Feedback;
