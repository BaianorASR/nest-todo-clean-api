import { IBaseEntityProps } from '@domain/interfaces/base-entity-props.interface';
import { BaseEntity } from './base.entity';

import { randomUUID } from 'node:crypto';
import { ReplaceType } from '@libs/@types/replace.type';

type TestEntityProps = { name: string } & IBaseEntityProps;

describe('BaseEntity', () => {
  class TestEntity extends BaseEntity<TestEntityProps> {
    constructor(
      props: ReplaceType<TestEntityProps, { createdAt?: Date }>,
      id?: string,
    ) {
      super(props, id);
    }

    get testProps() {
      return this.props;
    }

    get testId() {
      return this._id;
    }
  }

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
