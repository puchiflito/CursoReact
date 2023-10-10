/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useFetchData(endPoint) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endPoint}`
      );
      const data = await response.json();

      setData(data);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return { data, isLoading };
}
