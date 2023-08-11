import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const url = "http://localhost:3000/counter";
    axios.get(url).then((response) => {
      setCounter(response.data.count);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen mx-6 my-8">
      <h1 className="text-2xl font-bold mb-3">
        Capacitação de Tech: Blockchain Insper
      </h1>
      <p className="text-xl mb-2">Counter: { loading ? "Loading..." : counter}</p>
      <div className="space-x-2">
        <button className="bg-orange-600 text-white p-1 px-2 text-sm rounded-md hover:bg-orange-600/90 transition-all">
          Update
        </button>
        <button className="bg-blue-600 text-white p-1 px-2 text-sm rounded-md hover:bg-blue-600/90 transition-all">
          Increment
        </button>
        <button className="bg-blue-600 text-white p-1 px-2 text-sm rounded-md hover:bg-blue-600/90 transition-all">
          Decrement
        </button>
      </div>
    </div>
  );
}
