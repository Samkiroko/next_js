import mongoose from 'mongoose';

export async function connect() {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL!);
    console.log('Database is connected to:', db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
