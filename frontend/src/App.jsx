import React, { useEffect, useState } from "react";
import axios from "axios";

import MyFirstComponent from "./components/MyFirstComponent";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = "http://localhost:3000/hello";
    axios.get(url).then((response) => {
      setData(response.data.hello);
    });
  }, []);

  return (
    <div className="min-h-screen mx-6 my-8">
      <h1 className="text-2xl font-bold">
        Capacitação de Tech: Blockchain Insper
      </h1>
      <p>
        Resposta do servidor: <span>{data}</span>
      </p>
      {/* <MyFirstComponent />
      <MyFirstComponent includeChild />
      <MyFirstComponent /> */}
    </div>
  );
}
