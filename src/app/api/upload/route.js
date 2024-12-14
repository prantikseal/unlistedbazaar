import { NextResponse } from 'next/server';
import { uploadImage } from '@/utils/imagekit';

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get('file');
    
    const response = await uploadImage(file);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: error.message }, 
      { status: error.message === 'No file provided' ? 400 : 500 }
    );
  }
} 