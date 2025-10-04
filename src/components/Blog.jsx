import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { blogMetadata } from "../blogs/metadata.js";
import "../css/Blog.css";

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const location = useLocation();

  const path = location.pathname.toLowerCase();
  let category = "blog";
  if (path.includes("/case-studies")) category = "case-study";
  if (path.includes("/resources")) category = "blog";

  const filteredBlogs = blogMetadata.filter(
    (b) => b.category && b.category.toLowerCase() === category
  );

  const totalBlogs = filteredBlogs.length;

  const loadMore = () => {
    setVisibleCount(totalBlogs);
    setTimeout(() => {
      window.lenis?.scrollTo(window.scrollY, { immediate: true });
    }, 0);
  };

  return (
    <div className="whole-blog-section">
      <div className="blogs-container">
        <h1 className="main-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
          {category === "case-study" ? "Case Studies" : "Blogs"}
        </h1>

        <div className="blogs-grid">
          {filteredBlogs.slice(0, visibleCount).map((metadata, index) => (
            <Link to={metadata.slug} className="read-more">
              <div key={index} className="blog-card">
                <img src={metadata.image} alt={metadata.title} className="blog-image" />
                <div className="blog-content">
                  <h2 className="sub-heading" style={{paddingBottom:10}}>{metadata.title}</h2>
                  <p className="text" style={{paddingBottom:10}}>{metadata.excerpt}</p>
                  Read More
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < totalBlogs && (
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Blogs;
