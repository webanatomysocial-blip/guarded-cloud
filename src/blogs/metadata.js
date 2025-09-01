export const blogMetadata = [
  {
    id: "Breach-cost-50-person-company",
    title: "How Much Does a Breach Really Cost a 50-Person Company?",
    slug: "/blog/breach-cost-50-person-company",
    metaDescription: "A practical way to estimate breach impact for a 50-employee company—downtime, lost deals, recovery work, and insurance—without hand-wavy scare tactics.",
    excerpt: "Big-enterprise breach numbers don’t help SMBs plan. Use this simple worksheet to estimate your own exposure and decide what’s worth investing in before you need it.",
    image: "https://cloud.kaphi.in/images/21655.jpg",
    date: "2025-08-26"
  },
];

// Preload images
blogMetadata.forEach(blog => {
  const img = new Image();
  img.src = blog.image;
});