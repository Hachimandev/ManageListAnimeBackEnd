import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { Anime } from './anime.entity';

@Controller('animes')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get()
  getAll(): Promise<Anime[]> {
    return this.animeService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Anime | null> {
    return this.animeService.findOne(+id);
  }

  @Get(':id/categories')
  async getCategoriesOfAnime(@Param('id') id: string) {
    const anime = await this.animeService.getAnimeWithCategories(+id);
    if (!anime) {
      throw new NotFoundException('Anime not found');
    }
    return anime.categories;
  }
}
