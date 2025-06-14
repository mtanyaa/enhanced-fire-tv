"use client";
import { useRef, useEffect } from "react";

export default function MoodCarousel() {
  const slideRef = useRef(null);
  const currentSlide = useRef(0);

  const slide = (direction) => {
    const slides = slideRef.current;
    if (!slides || !slides.children || slides.children.length === 0) return;
    const totalSlides = slides.children.length;
    currentSlide.current = (currentSlide.current + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide.current * 100}%)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slide(1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="suggestion">
      <div className="dropdown-container">
        <select className="custom-dropdown">
          <option value="">Select Your Mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="confused">Confused</option>
          <option value="mysterious">Mysterious</option>
        </select>
      </div>
      <div className="heading">Recommendations for you</div>
      <div className="carousel-container">
        <div className="carousel">
          <div className="slides" ref={slideRef}>
            <img src="/c1.jpg" alt="Slide 1" />
            <img src="/c2.webp" alt="Slide 2" />
            <img src="/c3.jpg" alt="Slide 3" />
          </div>
        </div>
        <div className="carousel-buttons">
          <button onClick={() => slide(-1)}>&lt;</button>
          <button onClick={() => slide(1)}>&gt;</button>
        </div>
      </div>
    </div>
  );
}
