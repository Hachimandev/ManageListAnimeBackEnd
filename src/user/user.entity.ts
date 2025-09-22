import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserAnime } from '../user-anime/user-anime.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  googleId: string;

  @Column({ default: 'user' }) // 'admin' hoặc 'user'
  role: string;

  // 1 user -> nhiều anime (qua bảng trung gian User_Anime)
  @OneToMany(() => UserAnime, (userAnime) => userAnime.user)
  userAnimes: UserAnime[];
}
