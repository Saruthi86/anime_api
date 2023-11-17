import { Connection } from 'mongoose';
import { animeSchema } from './schemas/anime.schema';

export const animeProviders = [
  {
    provide: 'ANIME_MODEL',
    useFactory: (connection: Connection) => connection.model('Anime', animeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];