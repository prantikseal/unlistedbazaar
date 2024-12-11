'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const stockData = [
  {
    name: 'NSE',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000'
  },
  {
    name: 'TATA CAPITAL',
    price: 940,
    image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=1000'
  },
  {
    name: 'POLYMATECH',
    price: 500,
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000'
  },
  {
    name: 'OYO',
    price: 53,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000'
  },
  {
    name: 'VIKRAM SOLAR',
    price: 455,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000'
  },
  {
    name: 'HDB FINANCIAL',
    price: 1240,
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000'
  },
  {
    name: 'INCRED',
    price: 420, // Added estimated price
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000'
  },
  {
    name: 'CSK',
    price: 200,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000'
  },
  {
    name: 'HDFC SECURITIES',
    price: 11200,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000'
  },
  {
    name: 'APOLLO GREEN',
    price: 410,
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000'
  },
  {
    name: 'MATRIX GAS',
    price: 870,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'RRP',
    price: 320,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000'
  },
  {
    name: 'MOKAHN MEKAIN',
    price: 240,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1000'
  },
  {
    name: 'STERLITE POWER',
    price: 600,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000'
  },
  {
    name: 'BIRA',
    price: 580,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000'
  },
  {
    name: 'PAYMATE',
    price: 630,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000'
  },
  {
    name: 'ESDS',
    price: 380,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000'
  },
  {
    name: 'NCDEX',
    price: 210,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000'
  },
  {
    name: 'NAYARA',
    price: 620,
    image: 'https://images.unsplash.com/photo-1646836724029-61037aed37fb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'SBI CARDS',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000'
  },
  {
    name: 'HEXAWARE',
    price: 1030,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000'
  }
];

export default function TrendingStocks() {
  const [selectedStock, setSelectedStock] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <ArrowTrendingUpIcon className="w-10 h-10 text-[#3f6a4b]" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Trending Unlisted Stocks
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Discover high-potential opportunities in the unlisted market
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stockData.map((stock, index) => (
            <motion.div
              key={stock.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.08)] 
                         overflow-hidden hover:shadow-2xl transition-all duration-300
                         border border-gray-100"
            >
              <div className="relative h-48">
                <Image
                  src={stock.image}
                  alt={stock.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{stock.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-200">Current Price</span>
                    <span className="text-2xl font-bold text-white">
                      ₹{stock.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedStock(stock);
                      setShowContactForm(true);
                    }}
                    className="flex-1 bg-[#3f6a4b] text-white py-3 rounded-lg 
                             hover:bg-[#3f6a4b]/90 transition-colors
                             font-semibold shadow-lg shadow-[#3f6a4b]/20"
                  >
                    Buy Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedStock(stock);
                      setShowContactForm(true);
                    }}
                    className="flex-1 border-2 border-[#3f6a4b] text-[#3f6a4b] py-3 
                             rounded-lg hover:bg-[#3f6a4b]/10 transition-colors
                             font-semibold"
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