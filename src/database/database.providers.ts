import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://tacarvalho15:Macaco1986@cluster0.qtgndwf.mongodb.net/animeDB'),
  },
];