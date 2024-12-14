'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UrlDisplay = ({ url }) => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-2">
        <input
          type="text"
          value={url}
          readOnly
          className="w-full p-2 border rounded bg-gray-50"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className="px-4 py-2 bg-[#3f6a4b] text-white rounded hover:bg-[#3f6a4b]/90"
        >
          Copy
        </motion.button>
      </div>
      
      <AnimatePresence>
        {showCopyMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 right-0 bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UrlDisplay; 