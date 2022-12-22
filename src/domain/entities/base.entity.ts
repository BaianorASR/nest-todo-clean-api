import { randomUUID } from 'node:crypto';
import { IBaseEntityProps } from '@domain/interfaces/base-entity-props.interface';
import { ReplaceType } from '@libs/@types/replace.type';

export abstract class BaseEntity<
  T extends IBaseEntityProps = IBaseEntityProps,
> {
  protected _id: string;
  protected props: T = <T>{};

  constructor(props: ReplaceType<T, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();

    Object.assign(this.props, props, {
      createdAt: props.createdAt ?? new Date(),
    });
  }
}
