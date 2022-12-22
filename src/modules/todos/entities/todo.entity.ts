import { BaseEntity } from '@libs/entities/base.entity';
import { TodoContentEntity } from './todo-content.entity';
import { ReplaceType } from '@libs/@types/replace.type';
import { ITodoEntityProps } from '@todos/interfaces/todo-entity-props.interface';
import { EntityDateTime } from '@libs/@types/entity-datetime.type';

export class TodoEntity extends BaseEntity<ITodoEntityProps> {
  constructor(
    props: ReplaceType<ITodoEntityProps, { createdAt?: Date }>,
    id?: string,
  ) {
    super(props, id);
  }

  get id(): string {
    return this._id;
  }

  get owner(): string {
    return this.props.owner;
  }
  set owner(owner: string) {
    this.props.owner = owner;
  }

  get ownerId(): string {
    return this.props.ownerId;
  }
  set ownerId(ownerId: string) {
    this.props.ownerId = ownerId;
  }

  get content(): TodoContentEntity {
    return this.props.content;
  }
  set content(content: TodoContentEntity) {
    this.props.content = content;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get deletedAt(): EntityDateTime {
    return this.props.deletedAt;
  }

  public delete(): void {
    this.props.deletedAt = new Date();
  }

  get completedAt(): EntityDateTime {
    return this.props.completedAt;
  }

  public complete(): void {
    this.props.completedAt = new Date();
  }

  public unComplete(): void {
    this.props.completedAt = null;
  }
}
