import blog1 from "./blogs-images/blog1.jpg";
import blog2 from "./blogs-images/2151883593.jpg";

export const blogMetadata = [
  {
    id: "Breach-cost-50-person-company",
    title: "How Much Does a Breach Really Cost a 50-Person Company?",
    slug: "/case-studies/Breach-cost-50-person-company",
    metaDescription:
      "A practical way to estimate breach impact for a 50-employee company—downtime, lost deals, recovery work, and insurance—without hand-wavy scare tactics.",
    excerpt:
      "Big-enterprise breach numbers don’t help SMBs plan. Use this simple worksheet to estimate your own exposure and decide what’s worth investing in before you need it.",
    image: blog1,
    date: "2025-08-26",
    category: "case-study",
  },
  {
    id: "five-cloud-misconfigurations-attackers-love-and-how-to-fix-them",
    title: "Five Cloud Misconfigurations Attackers Love—And How to Fix Them",
    slug: "/blogs/five-cloud-misconfigurations-attackers-love-and-how-to-fix-them",
    metaDescription:
      "Discover the top five cloud misconfigurations hackers exploit most—and practical steps to fix them before they become entry points for breaches.",
    excerpt:
      "Even small cloud setup errors can open big security gaps. Learn the five misconfigurations attackers target most—and how to close them fast.",
    image: blog2,
    date: "2025-10-01",
    category: "blog",
  },

];

blogMetadata.forEach((blog) => {
  const img = new Image();
  img.src = blog.image;
});
