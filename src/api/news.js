// /api/news.js
import axios from "axios";

export default async function handler(req, res) {
  const { category = "general", lang = "en", country = "us", max = 10 } = req.query;

  try {
    const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
      params: {
        category,
        lang,
        country,
        max,
        apikey: process.env.NEWS_API_KEY,
      },
    });

    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: "Failed to fetch news",
      details: error.message,
    });
  }
}
