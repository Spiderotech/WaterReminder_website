import React from 'react';

const blogPosts = [
  {
  id: 1,
  title: 'Why Hydration is Essential for Aging Well',
  subtitle: 'The surprising role of water in maintaining health and vitality as we age.',
  category: 'WELLNESS',
  date: 'Sep 20, 2025',
  author: 'DoraDrink Team',
  excerpt:
    'As we get older, our sense of thirst can diminish, making it easier to become dehydrated without realizing it. Proper hydration is crucial for seniors to maintain energy levels, support cognitive function, and prevent common health issues like urinary tract infections and kidney stones. This article explores why consistent water intake is a key component of healthy aging and how a simple tool like a water reminder app can be a game-changer for daily routines.',
  size: 'large', // Custom size for the main card
},
  {
    id: 2,
    title: '5 Tips to Stay Hydrated in the Summer Heat',
    category: 'HEALTH',
    date: 'Sep 15, 2025',
    author: 'Emily Chen',
    excerpt: 'Beat the heat and stay healthy with these simple but effective tips to ensure you are drinking enough water throughout the day.',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Water and Weight Loss: The Unspoken Connection',
    category: 'NUTRITION',
    date: 'Sep 10, 2025',
    author: 'Sarah Brown',
    excerpt: 'Discover the powerful but often overlooked role that consistent water intake plays in a successful weight loss journey.',
    size: 'small',
  },
  {
    id: 4,
    title: 'The Surprising Link Between Hydration and Mood',
    category: 'WELLNESS',
    date: 'Sep 8, 2025',
    author: 'Aura Immerse',
    excerpt: 'Dehydration can have a significant impact on your cognitive function and mood. Learn how drinking more water can make a difference.',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Hydration for Athletes: A Performance Guide',
    category: 'FITNESS',
    date: 'Sep 5, 2025',
    author: 'Jane Doe',
    excerpt: 'A comprehensive guide on how athletes can optimize their hydration to improve endurance, performance, and recovery.',
    size: 'small',
  },
  {
    id: 6,
    title: 'Your Body on Water: How It Works',
    category: 'SCIENCE',
    date: 'Sep 2, 2025',
    author: 'Aure Doe',
    excerpt: 'Explore the biological processes and functions that rely on water to keep your body running efficiently and healthy.',
    size: 'small',
  },
  {
    id: 7,
    title: 'The Role of Water in Your Body\'s Natural Detox',
    category: 'HEALTH',
    date: 'Aug 29, 2025',
    author: 'Alex Chen',
    excerpt: 'Water is essential for flushing out toxins and waste from your body. This article explains how hydration supports your kidneys and liver in their crucial roles.',
    size: 'small',
  },
];

const BlogPostCard = ({ post }) => {
  const isLarge = post.size === 'large';
  // Removed isMedium as its styling is now consistent with small for a cleaner look

  return (
    <div
      className={`relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer border border-gray-100 p-6 flex flex-col justify-between
      ${isLarge ? 'lg:col-span-2 lg:row-span-1' : 'col-span-1 row-span-1'}
    `}
    >
      <div>
        <span className="bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
          {post.category}
        </span>
        <h3 className={`font-bold text-gray-900 mb-3 leading-tight ${isLarge ? 'text-3xl' : 'text-xl'}`}>
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
      </div>
      <div className="text-gray-500 text-sm mt-auto"> {/* mt-auto pushes this to the bottom */}
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section id="blogs" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-gray-100 text-gray-600 text-sm font-bold px-4 py-2 rounded-full mb-4 inline-block">
            BLOG
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hydration Insights & News
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay up-to-date on the latest health benefits and tips for staying hydrated.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;