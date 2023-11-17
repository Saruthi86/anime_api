import { Module } from '@nestjs/common';
import { animeModule } from './animes/anime.module';

@Module({
  imports: [animeModule],
})
export class AppModule {}
