import { TodoContentEntity } from './todo-content.entity';

describe('TodoContentEntity', () => {
  it('should be able to get the value of the content', () => {
    const todoContentEntity = new TodoContentEntity('Buy milk');
    expect(todoContentEntity.value).toEqual('Buy milk');
  });

  it('should be able to throw an error if the content length is less than 5 characters', () => {
    expect(() => {
      new TodoContentEntity('123');
    }).toThrowError('Invalid todo content length.');
  });

  it('should be able to throw an error if the content length is more than 240 characters', () => {
    expect(() => {
      new TodoContentEntity('A'.repeat(241));
    }).toThrowError('Invalid todo content length.');
  });

  it('should be able to not throw an error if the content length is between 5 and 240 characters', () => {
    expect(() => {
      new TodoContentEntity('Buy bread');
    }).not.toThrowError();
  });
});
