import { useState } from "react";
import { FaArrowDown, FaArrowsRotate, FaArrowUp } from "react-icons/fa6";



const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col bg-amber-100 items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2149001650.jpg')" }}>
      {/* <div className="relative">
        <img src="./images/dog.gif" alt="Cute Dog GIF" className="absolute -top-32 w-40" />
      </div> */}
      <div className="w-full max-w-xl text-center bg-yellow-100 bg-opacity-90 p-8 rounded-2xl shadow-lg w-80">
        <h1 className="text-3xl font-bold text-red-400 mb-4">Counter</h1>
        <p className="text-4xl font-bold text-orange-400 transition-transform duration-200 ease-in-out">
          {count}
        </p>
        <div className="flex flex-col sm:flex-row justify-center mt-4 gap-4">
          <button onClick={() => setCount(count - 1)} className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-400 text-white text-lg transition-transform hover:-translate-y-1 shadow-md">
            <FaArrowDown /> Decrease
          </button>
          <button onClick={() => setCount(0)} className="flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-300 text-red-700 text-lg transition-transform hover:-translate-y-1 shadow-md">
            <FaArrowsRotate /> Reset
          </button>
          <button onClick={() => setCount(count + 1)} className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-400 text-white text-lg transition-transform hover:-translate-y-1 shadow-md">
            <FaArrowUp /> Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
