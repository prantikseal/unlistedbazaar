'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const newsArticles = [
  {
    title: 'Nuvama Wealth buys OYO shares worth Rs 100 cr in secondary market',
    date: 'March 15, 2024',
    image: 'https://ik.imagekit.io/unlistedbazaar/stock-images/1699943813-7737_4x6AF6j8O.avif',
    link: 'https://www.business-standard.com/companies/news/nuvama-wealth-buys-oyo-shares-worth-rs-100-cr-in-secondary-market-124121300537_1.html'
  },
  {
    title: 'Zepto to become profitable in FY26, hopeful for IPO plans next year: CEO Aadit Palicha',
    date: 'December 10, 2024',
    image: 'https://ik.imagekit.io/unlistedbazaar/stock-images/Zepto_1651514445009_1733837289539__KodeixF_.avif',
    link: 'https://www.livemint.com/companies/news/zepto-to-become-pat-positive-in-fy26-hopeful-for-ipo-plans-next-year-ceo-aadit-palicha-11733836929690.html'
  },
  {
    title: 'Understanding the Unlisted Securities Market',
    date: 'December 10, 2024',
    image: 'https://ik.imagekit.io/unlistedbazaar/stock-images/20241206071211_bse_nse_stockmarket_nifty_sensex-2_83FYfup4m2.avif',
    link: 'https://www.moneycontrol.com/news/business/ipo/rs-1-5-lakh-crore-big-names-among-strong-ipo-pipeline-for-2025-12886343.html/amp'
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