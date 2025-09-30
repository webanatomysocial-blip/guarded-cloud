import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Blog.css';

const blogModules = import.meta.glob('../blogs/*.jsx');

const BlogPage = () => {
  const { blogName } = useParams();

  console.log('BlogPage: blogName from URL:', blogName);
  console.log('BlogPage: Available blog modules:', Object.keys(blogModules));

  if (!blogName) {
    console.warn('BlogPage: blogName is undefined');
    return <div className="blog-not-found">Blog not found</div>;
  }

  const blogKey = Object.keys(blogModules).find(key =>
    key.toLowerCase().endsWith(`/${blogName.toLowerCase()}.jsx`)
  );

  console.log('BlogPage: Found blogKey:', blogKey);

  if (!blogKey) {
    console.warn(`BlogPage: No blog found for blogName: ${blogName}`);
    return <div className="blog-not-found">Blog not found: {blogName}</div>;
  }

  const LazyBlog = React.lazy(() =>
    blogModules[blogKey]()
      .then(module => {
        console.log('BlogPage: Successfully loaded module for', blogName);
        return {
          default: module.default || (() => <div>Blog content missing</div>),
        };
      })
      .catch(error => {
        console.error(`BlogPage: Error loading blog ${blogName}:`, error);
        return { default: () => <div>Error loading blog: {blogName}</div> };
      })
  );

  return (
    <div className="blog-page-container">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyBlog />
      </Suspense>
    </div>
  );
};

export default BlogPage;