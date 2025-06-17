import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Removed 'styled-components' import again

const ContactForm = () => {
    // State to manage form input data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    });
    // State for displaying success or error alerts
    const [alert, setAlert] = useState(null);
    // State to track submission status (e.g., 'success' to show Thank You message)
    const [submissionStatus, setSubmissionStatus] = useState(null);
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Handles changes to input fields and updates form data state
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            // NOTE: This URL is 'http://localhost:5000/send_email'.
            // For a production environment, you MUST change this to your deployed backend URL.
            const response = await fetch('http://localhost:5000/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setAlert({ type: 'success', message: 'Submitted Successfully!' });
                setSubmissionStatus('success');
                // Reset form data and status after a successful submission after 5 seconds
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        contact: '',
                        message: '',
                    });
                    setSubmissionStatus(null);
                }, 5000); // 5 seconds
            } else {
                const errorData = await response.json();
                setAlert({ type: 'error', message: errorData.message || 'Something went wrong' });
            }
        } catch (err) {
            console.error('Error Sending message:', err);
            setAlert({ type: 'error', message: 'An error occurred. Please try again.' });
        }
    };

    // Conditional rendering: Show success message after successful submission
    if (submissionStatus === 'success') {
        return (
            <div className='bg-cyan-50 h-[300px] flex items-center justify-center p-4'>
                <div className='py-8 text-center'>
                    <h1 className='text-2xl sm:text-3xl font-bold mb-3'>Thank you for your Submission!</h1>
                    <p className='text-gray-700 max-w-md mx-auto'>
                        A member of our team will be in touch with you soon. In the meantime, please feel free to learn more about our platform by clicking below.
                    </p>
                    <div className='flex justify-center mt-6'>
                        {/* Replaced StyledWrapper with direct Tailwind styling */}
                        <Link to='/' // Link component from react-router-dom
                            className="relative mt-0.5 box-border border-0 rounded-full text-white py-3 px-6 bg-black flex transition-colors duration-200 items-center gap-2.5 font-bold cursor-pointer
                                    hover:bg-gray-800 group" // Added group class for hover effects
                            role="button" // Added role for accessibility
                        >
                            Home
                            <div className="flex justify-center items-center">
                                <div className="w-2.5 bg-black h-0.5 relative transition-all duration-200 group-hover:bg-white"> {/* Arrow base */}
                                    <span className="absolute box-border border-solid border-white border-b-0 border-r-0 border-t-0 border-l-0 w-0 h-0
                                        top-[-3px] right-[3px] p-[3px] transform rotate-[-45deg]
                                        group-hover:right-0 transition-all duration-200"
                                        style={{ borderWidth: '2px 2px 0 0' }} // Mimics border-width from original styled-components
                                    ></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Main render: Contact Form with two-column layout
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Left Box: Functional Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Please help us with your details</h1>

                    {/* Alert message display */}
                    {alert && (
                        <div className={`p-3 rounded-md mb-4 text-center ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {alert.message}
                        </div>
                    )}

                    {/* Form Structure */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name} // Controlled component
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-gray-900 placeholder-gray-500 bg-white"
                                placeholder="Enter your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email} // Controlled component
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-gray-900 placeholder-gray-500 bg-white"
                                placeholder="Enter your Email"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact" className="block text-base font-semibold text-gray-700 mb-1">Your contact number</label>
                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                value={formData.contact} // Controlled component
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-gray-900 placeholder-gray-500 bg-white"
                                placeholder="Contact number..."
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message} // Controlled component
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-gray-900 placeholder-gray-500 bg-white"
                                rows="4"
                                placeholder="Enter your Message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-black hover:bg-gray-800 rounded-md text-white font-semibold transition-colors duration-200 text-lg"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>

                {/* Right Box: Static Contact Details */}
                <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col justify-between">
                    <div >
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us Now!</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Book your exclusive Hyderabad to Srisailam tour package today and embark on a unique journey. Explore Srisailam your way, at your own pace. For bookings and inquiries, feel free to contact us. Make unforgettable memories with Gagan Travels!
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Main Office</h2>
                        <div className="space-y-4">
                            {/* Phone Numbers */}
                            <div className="flex items-center text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91 6302362628</span>
                            </div>
                            <div className="flex items-center text-gray-700 ml-9"> {/* Indent to align with first number */}
                                <span>+91 9676400388</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@gagantravels.com</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-start text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Block 3/21, Balaji Hills, Phase-2, Near Hanuman Temple, Nizampet, Hyderabad – 500090.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
