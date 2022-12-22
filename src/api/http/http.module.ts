import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { TodoController } from './controllers/todo.controller';

@Module({ controllers: [UserController, TodoController] })
export class HTTPModule {}
