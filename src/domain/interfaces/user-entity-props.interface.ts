import { TodoEntity } from '@domain/entities/todo/todo.entity';
import { IBaseEntityProps } from './base-entity-props.interface';

export interface IUserEntityProps extends IBaseEntityProps {
  username: string;
  password: string;
  todos: TodoEntity[];
  deletedAt?: Date | null;
}
