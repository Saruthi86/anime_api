import { Document } from 'mongoose';

export interface Anime extends Document {
  readonly item: string;
  readonly price: number;
  readonly quantity: number;
  readonly date: Date;
}