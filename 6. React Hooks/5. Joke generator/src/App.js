import "./styles.css";
import useFetch from "./useFetch";
import React, { useEffect, useState } from "react";

export default function App() {
  const { data, loading, error, fetchJoke } = useFetch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>

      {data?.setup ? (
        <h2>
          {data.setup} : {data.delivery}
        </h2>
      ) : (
        <h2>{data?.joke}</h2>
      )}

      <button className="btn" onClick={fetchJoke}>
        New Joke
      </button>
    </div>
  );
}
