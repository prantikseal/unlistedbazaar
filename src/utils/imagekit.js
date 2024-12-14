import ImageKit from 'imagekit';

export const imagekitConfig = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
});

export const uploadImage = async (file, folder = '/stock-images') => {
  if (!file) throw new Error('No file provided');
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  return new Promise((resolve, reject) => {
    imagekitConfig.upload({
      file: buffer,
      fileName: file.name,
      folder: folder
    }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}; 