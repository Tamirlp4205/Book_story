import mongoose from 'mongoose';

export const Connect = async (): Promise<void> => {
  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('Successfully connected to the database');
  } catch (error) {
    console.log('Connection error:', error);
  }
};

