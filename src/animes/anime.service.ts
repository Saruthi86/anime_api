import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Anime } from './interfaces/anime.interface';

@Injectable()
export class AnimeService {
  constructor(@Inject('ANIME_MODEL') private animeModel:Model<Anime>){

  }
  async findAll():Promise<Anime[]>{
    return this.animeModel.find().exec();
  }
  
}
