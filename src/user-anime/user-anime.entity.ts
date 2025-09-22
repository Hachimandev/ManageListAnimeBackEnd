import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Anime } from '../anime/anime.entity';

@Entity()
export class UserAnime {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  anime_id: number;

  @Column({ type: 'nvarchar', length: 20, default: 'chưa xem' })
  status: string; // 'đang xem', 'đã xem', 'chưa xem', 'bỏ dở'

  @Column({ default: 0 })
  episodes_watched: number;

  @ManyToOne(() => User, (user) => user.userAnimes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user: User;

  @ManyToOne(() => Anime, (anime) => anime.userAnimes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'anime_id', referencedColumnName: 'anime_id' })
  anime: Anime;
}
