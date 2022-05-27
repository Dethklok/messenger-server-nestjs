import { AbstractEntity } from '@common/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Message extends AbstractEntity {
  @Column('text')
  content: string;
}
