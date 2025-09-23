import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anime } from './anime.entity';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
  ) {}

  // Lấy tất cả anime
  findAll(): Promise<Anime[]> {
    return this.animeRepository.find({ relations: ['categories'] });
  }

  // Lấy anime theo id
  findOne(anime_id: number): Promise<Anime | null> {
    return this.animeRepository.findOne({
      where: { anime_id },
      relations: ['categories'],
    });
  }

  async getAnimeWithCategories(animeId: number) {
    return this.animeRepository.findOne({
      where: { anime_id: animeId },
      relations: ['categories'], // lấy luôn categories
    });
  }
}
