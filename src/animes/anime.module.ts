import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';
import { animeProviders } from './anime.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AnimeController],
  providers: [AnimeService, ...animeProviders],
})
export class animeModule {}