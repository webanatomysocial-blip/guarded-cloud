import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogMetadata } from '../blogs/metadata.js';
import '../css/Blog.css';

// Dynamically import all JSX files from blogs folder
const blogModules = import.meta.glob('../blogs/*.jsx', { eager: false });
const blogKeys = Object.keys(blogModules).sort();

const Blogs = (props) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const totalBlogs = blogKeys.length;

  // (Optional) Preload only first batch to avoid flicker when opening a blog
  useEffect(() => {
    blogKeys.slice(0, visibleCount).forEach(key => {
      blogModules[key]().catch(error => {
        console.error(`Error preloading blog ${key}:`, error);
      });
    });
  }, [visibleCount]);

  const loadMore = () => {
    const newCount = totalBlogs;
    setVisibleCount(newCount);
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
          {blogKeys.slice(0, visibleCount).map((key, index) => {
            const blogName = key.split('/').pop().replace('.jsx', '');
            const metadata =
              blogMetadata.find(blog => blog.id === blogName) || {
                title: blogName,
                excerpt: 'No excerpt available.',
                image: '/images/placeholder.jpg',
                date: 'No date',
              };

            return (
              <div key={index} className="blog-card">
                <img
                  src={metadata.image}
                  alt={metadata.title}
                  className="blog-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
                <div className="blog-content">
                  <h2 className="blog-title">{metadata.title}</h2>
                  {/* <p className="blog-date">{metadata.date}</p> */}
                  <p className="blog-excerpt">{metadata.excerpt}</p>
                  <Link to={`/case-studies/${blogName}`} className="read-more">
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
