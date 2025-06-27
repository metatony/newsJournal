/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {

        axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=05deffaadbdb4d32814d2712d59f1210')


        .then(function(response) {

            if (response.status !== 200){
                throw new Error(`Error: ${response.status}`);
            }
            console.log(response.data)

            setData(response.data.articles);
            setLoading(false);

        })
        .catch(function(error){
            console.error("Error fetching data:", error);
            setLoading(false);

        })
    }, [])

    return (
        <GlobalContext.Provider value={{data, loading}}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobal = () => {
    return useContext(GlobalContext);
  };
  