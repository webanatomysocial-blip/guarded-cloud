import React, { useState } from "react";
import "../css/EverythingYouNeed.css";

function EverythingYouNeed() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "Video Editor",
      image: "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png",
      video: "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.mp4", // Replace with actual video URL
    },
    {
      title: "Subtitles",
      image: "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png",
      video: "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.mp4", // Replace with actual video URL
    },
    {
      title: "Audio Editor",
      image: "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png",
      video: "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.mp4", // Replace with actual video URL
    },
  ];

  return (
    <>
      <section className="everything-you-need-section">
        <div className="everything-you-need-content">
          <p className="main-big-heading">
            Everything you need, <br />
            <span>all in one place</span>
          </p>
        </div>

        <div className="everything-you-need-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === index ? (
                <video
                  src={card.video}
                  className="card-video"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                />
              )}
              <p className="card-title">{card.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default EverythingYouNeed;