import { TodoContentEntity } from '@domain/entities/todo/todo-content.entity';
import { TodoEntity } from '@domain/entities/todo/todo.entity';
import { ITodoEntityProps } from '@domain/interfaces/todo-entity-props.interface';
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
