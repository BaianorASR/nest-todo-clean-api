import { Controller, Get } from '@nestjs/common';

import { GetTodosUseCase } from '@todos/use-cases/get-todos.use-case';
import { TodoEntity } from '@todos/entities/todo.entity';

@Controller('todo')
export class GetTodosHTTPController {
  constructor(private readonly getTodosUseCase: GetTodosUseCase) {}

  @Get()
  async getTodos(): Promise<TodoEntity[]> {
    return this.getTodosUseCase.execute();
  }
}
