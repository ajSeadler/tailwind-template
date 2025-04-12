// src/pages/Home.tsx
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col text-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <div className="flex space-x-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="w-20 h-20" alt="React logo" />
          </a>
        </div>
        <h2 className="mt-8 text-5xl font-extrabold">
          Welcome to Your Project
        </h2>
        <p className="mt-4 text-lg max-w-xl">
          This is a fancy homepage template using Vite, React, and Tailwind CSS.
        </p>
        <div className="mt-8">
          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-xl hover:bg-gray-100 transition"
          >
            Count is {count}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
