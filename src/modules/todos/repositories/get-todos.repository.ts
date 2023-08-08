import { TodoEntity } from '@todos/entities/todo.entity';

export abstract class IGetTodosRepository {
  abstract getTodos(): Promise<TodoEntity[]>;
}
