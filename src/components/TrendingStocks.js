'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const stockData = [
  { name: 'NSE', price: 1800, image: '/stocks/nse.jpg' },
  { name: 'TATA CAPITAL', price: 940, image: '/stocks/tata.jpg' },
  { name: 'POLYMATECH', price: 500, image: '/stocks/polymatech.jpg' },
  { name: 'OYO', price: 53, image: '/stocks/oyo.jpg' },
  { name: 'VIKRAM SOLAR', price: 455, image: '/stocks/vikram.jpg' },
  // Add more stocks as needed
];

export default function TrendingStocks() {
  const [selectedStock, setSelectedStock] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <ArrowTrendingUpIcon className="w-8 h-8 text-[#04dd2a]" />
          <h2 className="text-3xl font-bold">Trending Unlisted Stocks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stockData.map((stock, index) => (
            <motion.div
              key={stock.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={stock.image}
                  alt={stock.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{stock.name}</h3>
                <p className="text-2xl text-[#04dd2a] font-bold mb-4">
                  ₹{stock.price}
                </p>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedStock(stock);
                      setShowContactForm(true);
                    }}
                    className="flex-1 bg-[#04dd2a] text-white py-2 rounded-lg 
                             hover:bg-[#04dd2a]/90 transition-colors"
                  >
                    Buy
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedStock(stock);
                      setShowContactForm(true);
                    }}
                    className="flex-1 border-2 border-[#04dd2a] text-[#04dd2a] py-2 
                             rounded-lg hover:bg-[#04dd2a]/10 transition-colors"
                  >
                    Sell
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        stockName={selectedStock?.name}
      />
    </section>
  );
} 