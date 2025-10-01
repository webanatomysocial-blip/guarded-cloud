import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogMetadata } from '../blogs/metadata.js';
import '../css/Blog.css';

const Blogs = (props) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const totalBlogs = blogMetadata.length;

  const loadMore = () => {
    setVisibleCount(totalBlogs);
    setTimeout(() => {
      window.lenis?.scrollTo(window.scrollY, { immediate: true });
    }, 0);
  };

  return (
    <div
      className="whole-blog-section"
      style={{ backgroundColor: props.backgroundColor, paddingTop: props.marginTop }}
    >
      <div className="blogs-container">
        <h1
          className="main-heading"
          style={{ textAlign: 'center', marginBottom: '30px', color: props.textColor }}
        >
          Case Studies
        </h1>

        <div className="blogs-grid">
          {blogMetadata.slice(0, visibleCount).map((metadata, index) => {
            return (
              <div key={index} className="blog-card">
                <img
                  src={metadata.image}
                  alt={metadata.title}
                  className="blog-image"
                />

                <div className="blog-content">
                  <h2 className="blog-title">{metadata.title}</h2>
                  {/* <p className="blog-date">{metadata.date}</p> */}
                  <p className="blog-excerpt">{metadata.excerpt}</p>
                  <Link to={`/case-studies/${metadata.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
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
