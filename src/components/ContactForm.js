'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ContactForm({ isOpen, onClose, stockName }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    shares: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I'm interested in ${stockName}!
Name: ${formData.name}
Mobile: ${formData.mobile}
Shares: ${formData.shares}`;

    window.open(`https://wa.me/917411171144?text=${encodeURIComponent(message)}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
          >
            {/* Green accent bar */}
            <div className="h-2 bg-gradient-to-r from-[#3f6a4b] to-[#3f6a4b]/70" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Interested in {stockName}</h3>
              <p className="text-gray-600 mb-6">Fill in your details and we&apos;ll connect with you shortly</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 
                             focus:ring-2 focus:ring-[#3f6a4b] focus:border-transparent
                             transition-all duration-200 outline-none"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 
                             focus:ring-2 focus:ring-[#3f6a4b] focus:border-transparent
                             transition-all duration-200 outline-none"
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Shares</label>
                  <input
                    type="number"
                    required
                    placeholder="100"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 
                             focus:ring-2 focus:ring-[#3f6a4b] focus:border-transparent
                             transition-all duration-200 outline-none"
                    onChange={(e) => setFormData({ ...formData, shares: e.target.value })}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#3f6a4b] text-white py-4 rounded-lg 
                           hover:bg-[#3f6a4b]/90 transition-all duration-300
                           font-semibold text-lg shadow-lg shadow-[#3f6a4b]/20
                           flex items-center justify-center gap-2 group"
                >
                  Submit Request
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-6">
                By submitting this form, you agree to be contacted about your request
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 