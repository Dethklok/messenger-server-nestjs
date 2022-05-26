import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pegasus',
      password: 'pegasus',
      database: 'messenger',
      synchronize: true,
      logging: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      subscribers: [],
      migrations: [],
      migrationsTableName: 'migrations',
    }),
    MessagesModule,
  ],
  providers: [],
})
export class AppModule {}
