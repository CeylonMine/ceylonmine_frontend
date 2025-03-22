"use client"; 
import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    email: "",
    project: "",
    complaint: "",
    anonymous: false, // State to track if email is anonymous
  });

  const [emailError, setEmailError] = useState(""); // State to store email error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      anonymous: !prevState.anonymous,
      email: prevState.anonymous ? "" : prevState.email, // Clear email if unchecking anonymous
    }));
  };

  const validateEmail = (email) => {
    // Skip email validation if anonymous is checked
    if (formData.anonymous) return true;

    // Simple email regex pattern for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is valid (skip if anonymous)
    if (!formData.anonymous && !validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError(""); // Clear error if email is valid
    }

    const response = await fetch("http://127.0.0.1:5000/submit_complaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: `Complaint submitted successfully!`,
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({ email: "", project: "", complaint: "", anonymous: false }); // Reset form
    } else {
      Swal.fire({
        title: "Error!",
        text: data.error,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Complaint Form</h3>

        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
          {/* Email Input */}
          {!formData.anonymous && (
            <div>
              <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                required
              />
              {/* Display email error message */}
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
          )}

          {/* Anonymous Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleCheckboxChange}
              className="h-5 w-5 text-purple-500"
            />
            <label htmlFor="anonymous" className="text-gray-600 font-medium">
              Submit anonymously
            </label>
          </div>

          {/* Project Selection */}
          <div>
            <label htmlFor="project" className="block text-gray-600 font-medium">Project of Concern</label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
              required
            >
              <option value="">Select a project</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
              <option value="project3">Project 3</option>
            </select>
          </div>

          {/* Complaint Textarea */}
          <div>
            <label htmlFor="complaint" className="block text-gray-600 font-medium">Write Your Complaint</label>
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="Describe your issue..."
              className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-purple-600 transition">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}
