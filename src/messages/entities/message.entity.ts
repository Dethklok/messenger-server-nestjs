import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@shared/entities/abstract.entity';

@Entity()
export class Message extends AbstractEntity {
  @Column('text')
  content: string;
}
