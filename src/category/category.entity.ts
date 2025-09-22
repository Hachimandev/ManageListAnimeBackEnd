import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Anime } from '../anime/anime.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ unique: true })
  name: string;

  // 1 category có thể chứa nhiều anime
  @ManyToMany(() => Anime, (anime) => anime.categories)
  animes: Anime[];
}
