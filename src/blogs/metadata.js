export const blogMetadata = [
  {
    id: 'Blog1',
    title: 'lorem ipsum dolor',
    excerpt: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sapiente ex minus! Ipsa iure suscipit vero accusantium? Accusantium dolores nesciunt porro sint cupiditate sed deserunt, illum obcaecati adipisci, maiores delectus!',
    image: 'https://aecsastra1.mosol9.in/wp-content/uploads/2025/04/How-does-it-work-image_-min-1.jpg', // Image path
    // date: '2025-08-10',
  },
  {
    id: 'Blog2',
    title: 'lorem ipsum',
    excerpt: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sapiente ex minus! Ipsa iure suscipit vero accusantium? Accusantium dolores nesciunt porro sint cupiditate sed deserunt, illum obcaecati adipisci, maiores delectus!',
    image: 'https://aecsastra1.mosol9.in/wp-content/uploads/2025/04/How-does-it-work-image_-min-1.jpg', // Image path
    // date: '2025-08-10',
  },
  // Add more entries
];

// Preload images
blogMetadata.forEach(blog => {
  const img = new Image();
  img.src = blog.image;
});