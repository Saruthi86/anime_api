import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { Anime } from './interfaces/anime.interface';

@Controller("Anime")
export class AnimeController {
  constructor(private readonly AnimeService: AnimeService) {}

  @Get()
  async findAll(): Promise<Anime[]>{
    return this.AnimeService.findAll();
  
  }
}
