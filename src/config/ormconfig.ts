import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'myAnime',
  password: 'fahappy123',
  database: 'AnimeDB',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  options: {
    encrypt: false,
  },
};
