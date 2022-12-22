import { TodoContentEntity } from '@domain/entities/todo-content.entity';

export interface TodoEntityProps {
  id: string;
  owner: string;
  ownerId: string;
  content: TodoContentEntity;
  createdAt: Date;
  deletedAt?: Date | null;
  completedAt?: Date | null;
}
