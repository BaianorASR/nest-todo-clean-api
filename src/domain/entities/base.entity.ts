import { randomUUID } from 'node:crypto';

type TBaseEntityProps<P> = P & { createdAt?: Date };

export abstract class BaseEntity<T> {
  protected _id: string;
  protected props: T;

  constructor(props: TBaseEntityProps<T>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }
}
