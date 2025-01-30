import React, { useState, useEffect } from "react";

const WindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only on mount/unmount

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 text-black">
      <div className="w-full max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl bg-opacity-80">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Resize Listener
        </h2>
        <p className="text-xl text-center text-gray-600">
          Current Window Width:{" "}
          <span className="font-semibold text-pink-600">{windowWidth}px</span>
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowResize;
