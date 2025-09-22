import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';
// import { UserModule } from './user/user.module';
// import { AnimeModule } from './anime/anime.module';
import { CategoryModule } from './category/category.module';
// import { UserAnimeModule } from './user-anime/user-anime.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    // UserModule,
    // AnimeModule,
    CategoryModule,
    // UserAnimeModule,
  ],
})
export class AppModule {}
