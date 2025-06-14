"use client";
import "../app/style.css";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar";
import MoodCarousel from "./components/MoodCarousel";
import GridGallery from "./components/GridGallery";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bottom-blur"></div>
      <div className="content">
        <Navbar />
      </div>
      <div className="content">
        <MoodCarousel />
      </div>
      <GridGallery />
    </div>
  );
}
