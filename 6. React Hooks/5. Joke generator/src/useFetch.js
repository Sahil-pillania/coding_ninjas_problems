import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setJokeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jokeapi.dev/joke/any");
      const data = await response.json();
      setJokeData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return { data, loading, error, fetchJoke };
};

export default useFetch;
