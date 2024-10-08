import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  bookId : number ;
  username: string;
  email: string;
  password: string;
  profile_picture?: string;
  status: 'online' | 'offline' | 'away';
  created_at: Date;
  updated_at: Date;
 }

const bookSchema = new Schema({
  name: { type: String, required :true },
  publisher: { type: String, required :true },
  publisherAt: { type: String, required :true },
  image: { type: String ,required : true},
  author: { type: String, required :true },
  type: { type: String, required :true },
  pages: { type: Number, required: true },
  summary : {type : String  }
});

export default mongoose.models.Book || mongoose.model<IUser>('Book', bookSchema);