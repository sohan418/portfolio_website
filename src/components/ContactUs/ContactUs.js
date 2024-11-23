import React, { useState } from "react";
import "./ContactUs.css";
import BeatLoader from "react-spinners/BeatLoader";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loader
        setError(null); // Reset error state
    
        // Create an instance of FormData and append form values
        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('message', formData.message);
    
        console.log("Form Submitted:", formPayload);
    
        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: formPayload, // Using FormData object
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }
    
            const result = await response.json();
            console.log(result.message); // Handle success response
    
            // Optionally, reset the form or show a success message
            setFormData({
                name: "",
                email: "",
                message: "",
            });
    
        } catch (error) {
            console.error('Error:', error);
            setError('Submission failed. Please try again.'); // Handle error
        } finally {
            setLoading(false); // Stop loader after submission
        }
    };
    
    return (
        <div className="main-container">
        <div className="contact-container">
            <div className="contact-top-heading">
                <h2 style={{ color: "black" }}>Contact Us</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name" className="label-left">
                        Full Name: <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email" className="label-left">
                        Email Address: <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="xyz@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="message" className="label-left">
                        Comment: <span style={{ color: "red" }}>*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Leave a comment"
                        required
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="button-container">
                    <button className="btn-1" type="submit" disabled={loading}>
                        {loading ? <BeatLoader size={8} /> : "Send"}
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default ContactUs;
