import { TodoContentEntity } from '@domain/entities/todo/todo-content.entity';
import { IBaseEntityProps } from './base-entity-props.interface';

export interface ITodoEntityProps extends IBaseEntityProps {
  owner: string;
  ownerId: string;
  content: TodoContentEntity;
  createdAt: Date;
  deletedAt?: Date | null;
  completedAt?: Date | null;
}
