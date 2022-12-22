import { IUserEntityProps } from '@domain/interfaces/user-entity-props.interface';
import { BaseEntity } from '../base.entity';
import { ReplaceType } from '@libs/@types/replace.type';

export class UserEntity extends BaseEntity<IUserEntityProps> {
  constructor(
    props: ReplaceType<IUserEntityProps, { createdAt?: Date }>,
    id?: string,
  ) {
    super(props, id);
  }

  get id(): string {
    return this._id;
  }

  get username(): string {
    return this.props.username;
  }

  set username(username: string) {
    this.props.username = username;
  }

  get todos(): IUserEntityProps['todos'] {
    return this.props.todos;
  }
}
