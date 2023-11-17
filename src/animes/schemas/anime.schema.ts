import * as mongoose from 'mongoose';

export const animeSchema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
  date: Date,
});