import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogMetadata } from '../blogs/metadata.js';
import Blogs from './Blog';
import '../blogs/Internal-Blog.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const DynamicBlog = () => {
  const { id } = useParams(); // Changed from blogName to id
  console.log('DynamicBlog: id from URL:', id);

  const metadata = blogMetadata.find(blog => blog.id === id);
  console.log('DynamicBlog: Found metadata:', metadata);

  if (!metadata) {
    console.warn(`DynamicBlog: No metadata found for blog: ${id}`);
    return (
      <div className="blog-not-found">
        {/* <Header backgroundColor="black" /> */}
        <h1 className='main-heading'>Blog Not Found</h1>
        <p className='sub-heading'>No blog found with the ID: {id}</p>
        <Link to="/case-studies" className="blue-button-small">Back to Blogs</Link>
        {/* <Footer /> */}
      </div>
    );
  }

  const BlogComponent = React.lazy(() =>
    import(`../blogs/${id}.jsx`)
      .then(module => {
        console.log(`DynamicBlog: Successfully loaded blog component for ${id}`);
        return {
          default: module.default || (() => <div>Blog content missing</div>),
        };
      })
      .catch(error => {
        console.error(`DynamicBlog: Failed to load blog component for ${id}:`, error);
        return {
          default: () => (
            <div className='error-blog'>
              <p className='sub-heading-bold'>Error loading blog content. Please try again later.</p>
              <Link to="/case-studies" className='blue-button-small'>Back to Blogs</Link>
            </div>
          ),
        };
      })
  );

  return (
    <>
      {/* <Header backgroundColor="black" /> */}
      <div className="breach-article-wrapper">
        <div className="breach-hero-banner">
          <img className="hero-banner-image-blog" src={metadata.image} alt={metadata.title} />
          <div className="hero-overlay-section">
            <h1 className='main-heading'>{metadata.title}</h1>
          </div>
        </div>
        <div className="breach-article-content">
          <Suspense fallback={<div>Loading blog content...</div>}>
            <BlogComponent />
          </Suspense>
        </div>
        <section className="news-blogs-section-inner-blog-page">
          <div className="news-blogs-container">
            <Blogs />
          </div>
        </section>
      </div>
      {/* <Footer />/ */}
    </>
  );
};

export default DynamicBlog;