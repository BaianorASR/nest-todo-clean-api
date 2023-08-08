import { TodoEntity } from '@todos/entities/todo.entity';
import { IGetTodosRepository } from '@todos/repositories/get-todos.repository';

export class GetTodosUseCase {
  constructor(private readonly getTodosRepository: IGetTodosRepository) {}

  async execute(): Promise<TodoEntity[]> {
    try {
      const todos = await this.getTodosRepository.getTodos();
      return todos;
    } catch (error) {
      throw error;
    }
  }
}
