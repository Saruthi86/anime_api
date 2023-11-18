import { Document } from 'mongoose';

export interface Anime extends Document {
  readonly anime_id: number;
  readonly name: string;
  readonly genre: string;
  readonly rating: number;
}