import React, { useState, useEffect } from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import "../css/CarouselSection.css";

function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const slides = [
    {
      tab: "Cloud Security Monitoring & Threat Detection",
      content: "Add subtitles in just a click with our Auto Subtitle Generator",
      video: "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Cloud Infrastructure Protection",
      content: "Customize your brand with our Brand Kit tools",
      video: "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Identity & Access Management (IAM)",
      content: "Easily dub your videos with professional quality",
      video: "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Cloud Compliance & Governance",
      content: "Convert text to video using AI technology",
      video: "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Advisory & Managed Security Services",
      content: "Generate AI-powered video clips automatically",
      video: "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
    {
      tab: "Managed Detection and Response",
      content: "Create realistic AI avatars for your videos",
      video: "https://cdn-site-assets.veed.io/HP_Autosubtitles_964621196a/HP_Autosubtitles_964621196a.mp4",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
  };

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (difference > 50) {
      handleNext(); // swipe left → next
    }
    if (difference < -50) {
      handlePrev(); // swipe right → prev
    }

    setTouchStart(null);
  };

  useEffect(() => {
    const preloadVideos = slides.map((slide) => {
      const video = document.createElement("video");
      video.src = slide.video;
      video.load();
      return video;
    });
    return () => preloadVideos.forEach((video) => video.remove());
  }, []);

  return (
    <section
      className="carousel-section"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-container">
        <button
          className="carousel-arrow prev"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <HiArrowLongLeft className="carousel-icon" />
        </button>
        <div className="carousel-content">
          <h3 className="main-heading" style={{ marginBottom: "30px" }}>
            {slides[currentSlide].tab}
          </h3>
          <div className="video-wrapper">
            <video
              key={currentSlide}
              src={slides[currentSlide].video}
              className="carousel-video"
              autoPlay
              loop
              muted
              preload="auto"
            />
          </div>
        </div>
        <button
          className="carousel-arrow next"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <HiArrowLongRight className="carousel-icon" />
        </button>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CarouselSection;
