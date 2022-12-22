import { TodoEntityProps } from '@domain/interfaces/todo-entity-props.interface';
import { BaseEntity } from './base.entity';
import { EntityDateTime } from '@domain/interfaces/entity-datetime.interface';
import { TodoContentEntity } from './todo-content.entity';

export class TodoEntity extends BaseEntity<TodoEntityProps> {
  constructor(props: TodoEntityProps, id?: string) {
    super(props, id);
  }

  get id(): string {
    return this.props.id;
  }

  get owner(): string {
    return this.props.owner;
  }

  get ownerId(): string {
    return this.props.ownerId;
  }

  get content(): TodoContentEntity {
    return this.props.content;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get deletedAt(): EntityDateTime {
    return this.props.deletedAt;
  }

  public delete() {
    this.props.deletedAt = new Date();
  }

  get completedAt(): EntityDateTime {
    return this.props.completedAt;
  }

  public complete() {
    this.props.completedAt = new Date();
  }

  public unComplete() {
    this.props.completedAt = null;
  }
}
