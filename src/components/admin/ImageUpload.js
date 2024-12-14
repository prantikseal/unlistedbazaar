'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ImageUpload = ({ type, onUploadSuccess }) => {
  const [preview, setPreview] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e) => {
    try {
      if (!window.confirm(`Do you want to upload this as ${type}?`)) {
        return;
      }

      setIsUploading(true);
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setPreview(data.url);
      onUploadSuccess(data.url);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{type} Upload</h2>
      <div className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#3f6a4b] file:text-white
                    hover:file:bg-[#3f6a4b]/90"
        />
        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`relative ${type === 'Thumbnail' ? 'h-48 w-full' : 'h-32 w-32'}`}
            >
              <Image
                src={preview}
                alt={`${type} preview`}
                fill
                className={`rounded-lg ${type === 'Thumbnail' ? 'object-cover' : 'object-contain'}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isUploading && (
        <div className="mt-4">
          <div className="animate-pulse bg-gray-200 h-2 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload; 