import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/Footer";
import { GlobalProvider } from "./provider/GlobalProvider";
import AboutPage from "./pages/aboutPage/About";
import { Analytics } from "@vercel/analytics/react";
import WorldNews from "./pages/worldNews/WorldNews";
import ScrollToTop from "./components/ScrollToTop";
import TechnologyNews from "./pages/technologyNews/TechnologyNews";
import AppleNews from "./pages/appleNews/AppleNews";
import BbcNews from "./pages/bbcNews/BbcNews";

function App() {
  return (
    <GlobalProvider>
      <div className="container border-t border-b border ">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/world-news" element={<WorldNews />} />
            <Route path="/technology" element={<TechnologyNews />} />
            <Route path="/apple" element={<AppleNews />} />
            <Route path="/bbc" element={<BbcNews />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
          <Analytics />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
