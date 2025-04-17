import React from "react";

const ParkCleanupMessage: React.FC = () => {
  return (
    <div className="bg-neutral-800 text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">Wait a minute!</h2>
        <p className="text-lg mt-2">
          If this message is still here, that means we haven't had our first
          park cleanup yet!
        </p>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-400 mb-4">
          We need your help to get started! Once we reach enough participants,
          we can begin cleaning up and make the skatepark better for everyone.
        </p>

        <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300">
          Get Involved
        </button>
      </div>

      {/* Optionally, you can add more information or actions here */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Want to know more?</h3>
        <p className="text-sm text-gray-400 mt-2">
          Learn about how we plan to organize our first park cleanup and what
          you can do to help.
        </p>
        <a
          href="/learn-more"
          className="text-teal-500 hover:text-teal-400 mt-2 inline-block"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ParkCleanupMessage;
