// ContactForm.js

import { useState } from 'react';
import Button from '../../shared/button/Button';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to a server or display a confirmation message
        console.log('Form data submitted:', formData);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your form has been submited',
            showConfirmButton: false,
            timer: 1500
        })
    };

    return (
        <div className=' mt-10 md:mt-16 lg:mt-20 lg:w-1/2 mx-auto p-6 bg-gray-100 rounded-lg shadow-gray-200 shadow-lg text-black'>
            <h2 className="text-lg md:text-3xl text-center font-semibold mb-4 underline underline-offset-4">Contact Form</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <Button text={'submit'} />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
