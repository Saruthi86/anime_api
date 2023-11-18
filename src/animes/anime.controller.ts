import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { Anime } from './interfaces/anime.interface';

@Controller("anime")
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get()
  async findAll(): Promise<Anime[]>{
    return this.animeService.findAll();
  
  }
}
