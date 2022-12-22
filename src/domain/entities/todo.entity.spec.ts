import { TodoEntity } from './todo.entity';
import { TodoContentEntity } from './todo-content.entity';
import { makeTodoEntity } from '@test/factories/make-todo.factory';

describe('TodoEntity', () => {
  let todoEntity: TodoEntity;

  beforeEach(() => {
    todoEntity = makeTodoEntity({
      ownerId: '123',
    });
  });

  it('should be able to get the id', () => {
    expect(todoEntity.id).toBeDefined();
  });

  it('should be able to get and set the owner', () => {
    expect(todoEntity.owner).toEqual('Test');
    todoEntity.owner = 'Jane Doe';
    expect(todoEntity.owner).toEqual('Jane Doe');
  });

  it('should be able to get and set the owner id', () => {
    expect(todoEntity.ownerId).toEqual('123');
    todoEntity.ownerId = '456';
    expect(todoEntity.ownerId).toEqual('456');
  });

  it('should be able to get and set the content', () => {
    expect(todoEntity.content).toBeInstanceOf(TodoContentEntity);
    todoEntity.content = new TodoContentEntity('Buy bread');
    expect(todoEntity.content).toBeInstanceOf(TodoContentEntity);
  });

  it('should be able to get the createdAt date', () => {
    expect(todoEntity.createdAt).toBeInstanceOf(Date);
  });

  it('should be able to delete the todo', () => {
    todoEntity.delete();
    expect(todoEntity.deletedAt).toBeDefined();
  });

  it('should be able to complete the todo', () => {
    todoEntity.complete();
    expect(todoEntity.completedAt).toBeDefined();
  });

  it('should be able to un-complete the todo', () => {
    todoEntity.complete();
    todoEntity.unComplete();
    expect(todoEntity.completedAt).toBeNull();
  });
});
