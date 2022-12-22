import { TodoContentEntity } from '@todos/entities/todo-content.entity';
import { TodoEntity } from '@todos/entities/todo.entity';
import { ITodoEntityProps } from '@todos/interfaces/todo-entity-props.interface';
import { randomUUID } from 'node:crypto';

export function makeTodoEntityFactory(
  overrides?: Partial<ITodoEntityProps>,
): TodoEntity {
  return new TodoEntity({
    owner: 'Test',
    ownerId: randomUUID(),
    content: new TodoContentEntity('Test todo content'),
    ...overrides,
  });
}
