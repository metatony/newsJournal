import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer";
import { GlobalProvider } from "./provider/GlobalProvider";
import AboutPage from "./pages/About/About";
import { Analytics } from "@vercel/analytics/react";
import WorldNews from "./pages/World/WorldNews";
import ScrollToTop from "./components/ScrollToTop";
import TechnologyNews from "./pages/Tech/TechnologyNews";
import AppleNews from "./pages/Apple/AppleNews";
import BbcNews from "./pages/Bbc/BbcNews";

function App() {
  return (
    <GlobalProvider>
      <div className="container mx-auto max-w-[1200px]">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/world-news" element={<WorldNews />} />
            <Route path="/technology" element={<TechnologyNews />} />
            <Route path="/health" element={<AppleNews />} />
            <Route path="/sports" element={<BbcNews />} />
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

// container mx-auto max-w-[1100px] border-t border-b border
