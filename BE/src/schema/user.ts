import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
 userId : number ;
 username: string;
 email: string;
 password: string;
 profile_picture?: string;
 status: 'online' | 'offline' | 'away';
 created_at: Date;
 updated_at: Date;
}
const UserSchema: Schema = new mongoose.Schema({
 username: { type: String, required: true },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
 profile_picture: { type: String },
 status: { type: String, enum: ['online', 'offline', 'away'], default: 'offline' }
});
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);