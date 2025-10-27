/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const proxyUrl = import.meta.env.VITE_PROXY_URL;

  useEffect(() => {
    axios
      .get(
        `${proxyUrl}https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`
      )

      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(`Error: ${response.status}`);
        }
        console.log(response.data);

        // Delay for 4 seconds before showing content
        setTimeout(() => {
          setData(response.data.articles);
          setLoading(false);
        }, 4000);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ data, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
