import React, { useState } from "react";
import { Play } from "react-bootstrap-icons"; // Generic icon, replace with specific ones as needed
import "../css/CarouselSection.css";
import { HiArrowLongRight , HiArrowLongLeft } from "react-icons/hi2";


function CarouselSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      tab: "Auto Subtitles",
      content: "Add subtitles in just a click with our Auto Subtitle Generator",
      video:
        "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Brand Kit",
      content: "Customize your brand with our Brand Kit tools",
      video:
        "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Dubbing",
      content: "Easily dub your videos with professional quality",
      video:
        "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Text to Video AI",
      content: "Convert text to video using AI technology",
      video:
        "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "AI Clips",
      content: "Generate AI-powered video clips automatically",
      video:
        "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "AI Avatars",
      content: "Create realistic AI avatars for your videos",
      video:
        "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Recorder",
      content: "Record high-quality videos with our recorder",
      video:
        "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    const newSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(newSlide);
    setActiveTab(newSlide); // Sync active tab with slide
  };

  const handleNext = () => {
    const newSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(newSlide);
    setActiveTab(newSlide); // Sync active tab with slide
  };

  return (
    <section className="carousel-section">
      <div className="tabs">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <Play className="tab-icon" /> {slide.tab}
          </button>
        ))}
      </div>
      <div className="carousel-container">
        <button className="carousel-arrow prev" onClick={handlePrev}>
          <HiArrowLongLeft className="carousel-icon" />
        </button>
        <div className="carousel-content">
          <video
            src={slides[currentSlide].video}
            className="carousel-video"
            autoPlay
            loop
            muted
          />
        </div>
        <button className="carousel-arrow next" onClick={handleNext}>
          <HiArrowLongRight className="carousel-icon" />
        </button>
      </div>
    </section>
  );
}

export default CarouselSection;