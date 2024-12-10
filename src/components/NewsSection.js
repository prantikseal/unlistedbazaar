'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const newsArticles = [
  {
    title: 'The Rise of Unlisted Securities in India',
    date: 'March 15, 2024',
    image: '/news/article1.jpg',
    link: '#'
  },
  {
    title: 'Why Pre-IPO Investments are Gaining Popularity',
    date: 'March 10, 2024',
    image: '/news/article2.jpg',
    link: '#'
  },
  {
    title: 'Understanding the Unlisted Securities Market',
    date: 'March 5, 2024',
    image: '/news/article3.jpg',
    link: '#'
  }
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Latest News & Insights</h2>
          <p className="text-xl text-gray-600">
            Stay updated with the latest trends and news in unlisted securities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#04dd2a] font-semibold mb-2">
                  {article.date}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#04dd2a] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600">Read more →</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 