import { IBaseEntityProps } from '@libs/interfaces/base-entity-props.interface';
import { TodoContentEntity } from '../entities/todo-content.entity';

export interface ITodoEntityProps extends IBaseEntityProps {
  owner: string;
  ownerId: string;
  content: TodoContentEntity;
  createdAt: Date;
  deletedAt?: Date | null;
  completedAt?: Date | null;
}
