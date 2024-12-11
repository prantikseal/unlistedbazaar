'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const newsArticles = [
  {
    title: 'The Rise of Unlisted Securities in India',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000',
    link: 'https://www.moneycontrol.com/news/business/markets/unlisted-shares-what-are-they-and-should-you-invest-in-them-10308071.html'
  },
  {
    title: 'Why Pre-IPO Investments are Gaining Popularity',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000',
    link: 'https://economictimes.indiatimes.com/markets/ipos/fpos/pre-ipo-placement-meaning-benefits-risks-and-how-to-invest/articleshow/98163770.cms'
  },
  {
    title: 'Understanding the Unlisted Securities Market',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000',
    link: 'https://www.sebi.gov.in/legal/circulars/jan-2024/trading-in-unlisted-securities-by-alternative-investment-funds_81213.html'
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
                <p className="text-sm text-[#3f6a4b] font-semibold mb-2">
                  {article.date}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#3f6a4b] transition-colors">
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