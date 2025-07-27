import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    toast.success('Message sent successfully!');
    setSubmitted(true);
  };

  const handleAnotherResponse = (e: React.FormEvent) => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info & Socials */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">Get in Touch</h2>
          <p className="text-gray-400">
            Whether you have a question, want to collaborate, or just want to say hi — my inbox is open.
          </p>
          <div className="space-y-2 text-gray-300">
            <p>Email: <a href="mailto:abbansal25@gmail.com" className="text-blue-400 hover:underline">abbansal25@gmail.com</a></p>
            <p>Phone: <a href="tel:+918860205315" className="text-blue-400 hover:underline">+91 88602 05315</a></p>
            <p>Location: Haryana, India</p>
          </div>
          <div className="flex space-x-6 pt-4 text-2xl">
            <a href="https://github.com/abhishek-bansal25" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-bansal25/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-500" />
            </a>
          </div>
          <a
            href="/resume_abhishek_react_dev.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition"
          >
            Download Resume
          </a>
        </div>

        {/* Contact Form using FormSubmit */}
        {submitted ? (
          <div className="bg-green-900 text-green-300 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
            <p>Your message has been sent. I'll get back to you shortly.</p>
            <button
              onClick={handleAnotherResponse}
              type="submit"
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition"
            >Submit Another Response</button>

            {/* <button
  onClick={() => navigate('/contact')}
  className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition"
>
  Submit Another Response
</button> */}
          </div>
        ) : (
          <form
            ref={formRef}
            action="https://formsubmit.co/abbansal25@gmail.com"
            method="POST"
            className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-lg"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
