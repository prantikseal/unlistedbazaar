'use client';
import { useState } from 'react';
import ImageUpload from '@/components/admin/ImageUpload';
import UrlDisplay from '@/components/admin/UrlDisplay';

export default function UploadPage() {
  const [urls, setUrls] = useState({ thumbnail: '', logo: '' });

  const handleUploadSuccess = (type) => (url) => {
    setUrls(prev => ({ ...prev, [type.toLowerCase()]: url }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Image Upload</h1>
          <p className="mt-2 text-gray-600">Upload thumbnails and logos for your stocks</p>
        </div>
        
        <div className="space-y-8">
          <div>
            <ImageUpload 
              type="Thumbnail" 
              onUploadSuccess={handleUploadSuccess('thumbnail')} 
            />
            {urls.thumbnail && (
              <div className="mt-4">
                <UrlDisplay url={urls.thumbnail} />
              </div>
            )}
          </div>

          <div>
            <ImageUpload 
              type="Logo" 
              onUploadSuccess={handleUploadSuccess('logo')} 
            />
            {urls.logo && (
              <div className="mt-4">
                <UrlDisplay url={urls.logo} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 