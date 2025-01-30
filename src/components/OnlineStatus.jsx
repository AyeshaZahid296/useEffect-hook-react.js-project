import React, { useState, useEffect } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2149007819.jpg')" }}>
      <div className="w-full max-w-2xl p-8 bg-white bg-opacity-60 shadow-lg rounded-3xl text-center backdrop-blur-lg">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Online Status Checker
        </h2>
        <p className="text-xl">
          You are currently{" "}
          <span
            className={`font-semibold ${
              isOnline ? "text-green-500" : "text-red-500"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </p>
        <p className="text-lg mt-4">
          {isOnline
            ? "You are connected to the internet."
            : "You are not connected to the internet."}
        </p>
      </div>
    </div>
  );
};

export default OnlineStatus;
