import * as mongoose from 'mongoose';

export const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name:String,
  genre: String,
  rating: Number,
});