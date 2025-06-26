/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        Promise.all([
            axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6d18482b6ce244cca73a6f19a42e926b'),
            axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6d18482b6ce244cca73a6f19a42e926b'),
            axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6d18482b6ce244cca73a6f19a42e926b'),
            axios.get('https://newsapi.org/v2/everything?q=apple&from=2025-06-24&to=2025-06-24&sortBy=popularity&apiKey=6d18482b6ce244cca73a6f19a42e926b'),
            axios.get('https://newsapi.org/v2/everything?q=tesla&from=2025-05-25&sortBy=publishedAt&apiKey=6d18482b6ce244cca73a6f19a42e926b'),
            axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6d18482b6ce244cca73a6f19a42e926b'),
            axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6d18482b6ce244cca73a6f19a42e926b')

        
        ])
        .then(function(response) {
            const wallStreet = response[0].data.articles
            const Business = response[1].data.articles
            const techCrunch = response[2].data.articles
            const apple = response[3].data.articles
            const tesla = response[4].data.articles;
            const TopHeadlines = response[5].data.articles;
            const bbcNews = response[6].data.articles;

            console.log("Wall Street Articles:", wallStreet);
            console.log("UK top headlines:", TopHeadlines);
            console.log("Business Articles:", tesla);

            setData({
                wallStreet,
                Business,
                techCrunch,
                apple,
                tesla,
                TopHeadlines,
                bbcNews,
            });
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
  