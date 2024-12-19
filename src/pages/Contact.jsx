import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h1 className="mb-6 font-bold text-3xl text-center text-green-500">
          Contact Us
        </h1>
        <form className="space-y-4">
          <input
            className="block border-gray-300 p-2 border rounded focus:ring-2 focus:ring-purple-500 w-full focus:outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="block border-gray-300 p-2 border rounded focus:ring-2 focus:ring-purple-500 w-full focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="block border-gray-300 p-2 border rounded focus:ring-2 focus:ring-purple-500 w-full focus:outline-none"
            placeholder="Message"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded w-full font-semibold text-white transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
