import React, { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
    // Simulate submission effect
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);

    // Clear input fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-70 backdrop-blur-lg shadow-lg p-10 rounded-3xl max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-purple-600 text-center mb-6">
          Contact Us
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white bg-opacity-80"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white bg-opacity-80"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white bg-opacity-80"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-semibold py-3 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-transform transform hover:scale-105 shadow-md"
          >
            {submitted ? "Submitted! 🎉" : "Submit"}
          </button>
        </form>

        {/* Displaying Logged Values */}
        <div className="mt-6 p-4 bg-white bg-opacity-60 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Live Preview:</h3>
          <p className="text-gray-700">
            <strong>Name:</strong> {formData.name || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {formData.email || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Message:</strong> {formData.message || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
