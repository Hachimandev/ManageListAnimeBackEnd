import { Controller, Get, Param } from '@nestjs/common';
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
}
