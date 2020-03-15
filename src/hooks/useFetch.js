import { useState, useEffect } from "react";

export const useFetch = (url1, url2) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorld() {
      const request = await fetch(url1);
      return request.json();
    }
    async function fetchPortugal() {
      const request = await fetch(url2);
      return request.json();
    }
    Promise.all([fetchWorld(), fetchPortugal()]).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [url1, url2]);

  return {
    data,
    loading
  };
};
