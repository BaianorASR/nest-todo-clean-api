import { UserEntity } from '@domain/entities/user/user.entity';
import { IUserEntityProps } from '@domain/interfaces/user-entity-props.interface';
import { makeTodoEntityFactory } from './make-todo.factory';

export function makeUserEntityFactory(
  overrides?: Partial<IUserEntityProps>,
): UserEntity {
  return new UserEntity(
    {
      username: 'Test',
      password: 'Test',
      todos: [makeTodoEntityFactory()],
      ...overrides,
    },
    overrides?.id,
  );
}
