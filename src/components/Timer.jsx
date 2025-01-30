import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  // Start the timer
  const startTimer = () => {
    setIsRunning(true);
    const newTimer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setTimer(newTimer);
  };

  // Stop the timer
  const stopTimer = () => {
    clearInterval(timer);
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(timer);
    setCount(0);
    setIsRunning(false);
  };

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7l2bvZ8HSzztU73YS07a8WTScx0fH4Q25w&s')"}}>
      <div className="w-full bg-white bg-opacity-90 p-12 rounded-2xl shadow-2xl text-center max-w-lg">
        <h2 className="text-6xl font-bold text-teal-400 mb-4 ">
          Timer
        </h2>
        <div className="text-6xl font-semibold text-teal-600 mb-6 animate__animated animate__fadeIn animate__slow">
          {count}s
        </div>
        <div className="space-x-6">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="text-xl bg-gradient-to-r from-green-200 to-blue-300 text-teal-700 py-3 px-8 rounded-full hover:from-green-300 hover:to-blue-400 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopTimer}
              className="text-xl bg-gradient-to-r from-yellow-200 to-orange-300 text-teal-700 py-3 px-8 rounded-full hover:from-yellow-300 hover:to-orange-400 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Pause
            </button>
          )}
          <button
            onClick={resetTimer}
            className="text-xl bg-gradient-to-r from-red-300 to-pink-300 text-teal-700 py-3 px-8 rounded-full hover:from-red-400 hover:to-pink-400 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Reset
          </button>
        </div>
        {/* <p className="mt-6 text-xl text-gray-700 font-semibold tracking-wider">
          Let's make time fly with a smile! 😊
        </p> */}
      </div>
    </div>
  );
};

export default Timer;
