import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { UserAnime } from '../user-anime/user-anime.entity';

@Entity()
export class Anime {
  @PrimaryGeneratedColumn()
  anime_id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ type: 'date', nullable: true })
  release_date: Date;

  @Column({ default: 0 })
  episode_count: number;

  @Column({ default: 'đang phát sóng' })
  status: string;

  // Many-to-Many với Category
  @ManyToMany(() => Category, (category) => category.animes)
  @JoinTable({
    name: 'anime_category',
    joinColumn: { name: 'anime_id', referencedColumnName: 'anime_id' },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'category_id',
    },
  })
  categories: Category[];

  // One anime -> nhiều record UserAnime (quan hệ ngược)
  @OneToMany(() => UserAnime, (userAnime) => userAnime.anime)
  userAnimes: UserAnime[];
}
