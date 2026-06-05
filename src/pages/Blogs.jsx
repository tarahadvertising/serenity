import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeader from '../components/SectionHeader';

const blogPosts = [
  {
    id: 1,
    title: 'Maritime Industry Trends 2024',
    excerpt:
      'Exploring the latest developments in autonomous shipping and sustainable maritime operations.',
    category: 'Industry Insights',
    date: 'May 15, 2024',
    readTime: '5 min read',
    image: '/image1.webp',
    featured: true,
  },
  {
    id: 2,
    title: 'The Future of Yacht Management',
    excerpt:
      'How digital transformation is revolutionizing luxury yacht operations and maintenance.',
    category: 'Yachting',
    date: 'May 10, 2024',
    readTime: '4 min read',
    image: '/image4.webp',
    featured: false,
  },
  {
    id: 3,
    title: 'Autonomous Systems in Marine Operations',
    excerpt:
      "Deep dive into Ocean Infinity's cutting-edge autonomous marine technology.",
    category: 'Technology',
    date: 'May 5, 2024',
    readTime: '6 min read',
    image: '/image5.webp',
    featured: false,
  },
  {
    id: 4,
    title: 'Port Agency Excellence',
    excerpt:
      'Best practices in port agency management and logistics coordination.',
    category: 'Operations',
    date: 'April 28, 2024',
    readTime: '3 min read',
    image: '/image3.webp',
    featured: false,
  },
  {
    id: 5,
    title: 'Industrial Engineering Innovations',
    excerpt:
      "Warmsol's approach to sustainable industrial engineering solutions.",
    category: 'Engineering',
    date: 'April 20, 2024',
    readTime: '5 min read',
    image: '/image2.webp',
    featured: false,
  },
  {
    id: 6,
    title: 'Sustainable Maritime Practices',
    excerpt:
      'How the industry is adapting to environmental challenges and regulations.',
    category: 'Sustainability',
    date: 'April 15, 2024',
    readTime: '7 min read',
    image: '/image6.webp',
    featured: false,
  },
];

const categories = [
  'All',
  'Industry Insights',
  'Yachting',
  'Technology',
  'Operations',
  'Engineering',
  'Sustainability',
];

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const filterPosts = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === category));
    }
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-ink">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-sea to-ink" />
        <div className="relative z-10 text-center section-padding">
          <RevealOnScroll>
            <h1 className="font-display text-display-l text-pearl mb-6">
              Blogs & Newsletters
            </h1>
            <p className="text-body-l text-mist max-w-3xl mx-auto">
              Insights, innovations, and industry updates from across the Ocean
              Serenity group of companies.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="max-w-site mx-auto">
          {/* Category Filter */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => filterPosts(category)}
                  className={`px-6 py-2 font-mono text-eyebrow uppercase tracking-wide transition-all duration-hover ${
                    selectedCategory === category
                      ? 'bg-brass text-ink'
                      : 'bg-midnight text-mist hover:bg-horizon hover:text-pearl'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && (
            <RevealOnScroll>
              <motion.article
                className="mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-brass/20 text-brass font-mono text-eyebrow uppercase">
                        Featured
                      </span>
                      <span className="font-mono text-eyebrow uppercase text-mist">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="font-display text-h2 text-pearl mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-body-l text-mist mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-mist">
                      <span className="font-mono text-sm">
                        {featuredPost.date}
                      </span>
                      <span className="font-mono text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <button className="mt-8 text-brass hover:text-brass-light transition-colors duration-hover font-mono text-sm uppercase tracking-wide">
                      Read More →
                    </button>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="aspect-[16/10] bg-midnight rounded-lg overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            </RevealOnScroll>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <RevealOnScroll key={post.id}>
                <motion.article
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="aspect-[16/10] bg-midnight rounded-lg overflow-hidden mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-eyebrow uppercase text-mist">
                      {post.category}
                    </span>
                    <span className="text-mist/20">•</span>
                    <span className="font-mono text-eyebrow uppercase text-mist">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-h4 text-pearl mb-3 group-hover:text-brass transition-colors duration-hover">
                    {post.title}
                  </h3>
                  <p className="text-body text-mist mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-mist">
                      {post.date}
                    </span>
                    <span className="text-brass group-hover:text-brass-light transition-colors duration-hover font-mono text-sm uppercase tracking-wide">
                      Read More →
                    </span>
                  </div>
                </motion.article>
              </RevealOnScroll>
            ))}
          </div>

          {/* Newsletter Signup */}
          <RevealOnScroll>
            <motion.div
              className="mt-32 p-12 bg-deep-sea rounded-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-h2 text-pearl mb-4">
                Stay Updated
              </h2>
              <p className="text-body-l text-mist mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights and updates
                from across the Ocean Serenity group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-midnight text-pearl placeholder-mist/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brass"
                />
                <button className="px-8 py-3 bg-brass text-ink font-mono text-sm uppercase tracking-wide rounded-lg hover:bg-brass-light transition-colors duration-hover">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
