import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [DatabaseModule, MessagesModule],
})
export class AppModule {}
