import { makeUserEntityFactory } from '@test/factories/make-user.factory';
import { UserEntity } from './user.entity';
import { makeTodoEntityFactory } from '@test/factories/make-todo.factory';
import { TodoContentEntity } from '../todo/todo-content.entity';

describe('UserEntity', () => {
  let userEntity: UserEntity;

  beforeEach(() => {
    userEntity = makeUserEntityFactory({ id: '123', username: 'tester' });
  });

  it('should be able to get the value of the id property', () => {
    expect(userEntity.id).toEqual('123');
  });

  it('should be able to get the value of the username property', () => {
    expect(userEntity.username).toEqual('tester');
  });

  it('should be able to set the value of the username property', () => {
    userEntity.username = 'jane.doe';
    expect(userEntity.username).toEqual('jane.doe');
  });

  it('should be able to get the value of the todos property', () => {
    const userEntity = makeUserEntityFactory({
      username: 'john.doe',
      todos: [
        makeTodoEntityFactory({ content: new TodoContentEntity('Buy milk') }),
      ],
    });

    expect(userEntity.todos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          content: expect.objectContaining({
            value: 'Buy milk',
          }),
        }),
      ]),
    );
  });
});
