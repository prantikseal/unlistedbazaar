'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';
import { fetchStockData } from '@/utils/sheets';

export default function TrendingStocks() {
  const [selectedStock, setSelectedStock] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStocks = async () => {
      try {
        const data = await fetchStockData();
        console.log('Fetched stocks:', data);
        if (data.length === 0) {
          setError('No stocks data available');
        } else {
          setStocks(data);
        }
      } catch (err) {
        console.error('Error loading stocks:', err);
        setError('Failed to load stocks data');
      } finally {
        setLoading(false);
      }
    };
    loadStocks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#3f6a4b]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-[#3f6a4b] text-white rounded-lg hover:bg-[#3f6a4b]/90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
          {stocks.map((stock, index) => (
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
                  src={stock.thumbnail}
                  alt={stock.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg">
                  <div className="relative h-24 w-24">
                    <Image
                      src={stock.logo}
                      alt={`${stock.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
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