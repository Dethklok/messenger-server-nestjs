import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  create(createMessageDto: CreateMessageDto) {
    return this.messagesRepository.save(createMessageDto);
  }

  findAll() {
    return this.messagesRepository.find();
  }

  findOne(id: number) {
    return this.messagesRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messagesRepository.update({ id }, updateMessageDto);
  }

  remove(id: number) {
    return this.messagesRepository.delete({ id });
  }
}
