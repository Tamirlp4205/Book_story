import { timeStamp } from 'console';
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
 roomId : number ;
 roomName: string;
 room_picture?: string;
 created_at: Date;
 updated_at: Date;
}
const chatRoomSchema: Schema = new mongoose.Schema({
 roomName: { type: String, required: true },
 room_picture: { type: String },
 
 created_at : {type :timeStamp},

});
export default mongoose.models.chatRoomSchema || mongoose.model<IUser>('ChatRoom', chatRoomSchema);