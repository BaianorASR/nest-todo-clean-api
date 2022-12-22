import { BaseEntity } from './base.entity';

import { randomUUID } from 'node:crypto';

type TestEntityProps = { name: string } & { createdAt?: Date };

class TestEntity extends BaseEntity<TestEntityProps> {
  constructor(props: TestEntityProps, id?: string) {
    super(props, id);
  }

  get testProps() {
    return this.props;
  }

  get testId() {
    return this._id;
  }
}

describe('BaseEntity', () => {
  test('should be able to create an instance', () => {
    const entity = new TestEntity({ name: 'Test' });
    expect(entity).toBeInstanceOf(TestEntity);
    expect(entity.testId).toBeDefined();
    expect(typeof entity.testId).toBe('string');
  });

  test('should be able to create an instance with a given id', () => {
    const id = randomUUID();
    const entity = new TestEntity({ name: 'Test' }, id);
    expect(entity).toBeInstanceOf(TestEntity);
    expect(entity.testId).toBe(id);
  });

  test('should be able copy the props', () => {
    const props = { name: 'Test' };
    const entity = new TestEntity(props);
    expect(entity.testProps).toEqual(
      expect.objectContaining({
        ...props,
        createdAt: expect.any(Date),
      }),
    );
    expect(entity.testProps).not.toBe(props);
  });
});
