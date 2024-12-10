'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    
    // Replace with your WhatsApp number
    window.open(`https://wa.me/919XXXXXXXXX?text=${encodeURIComponent(message)}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 w-full max-w-md mx-4"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in {stockName}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Number of Shares</label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  onChange={(e) => setFormData({...formData, shares: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#04dd2a] text-white py-3 rounded-lg 
                         hover:bg-[#04dd2a]/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 