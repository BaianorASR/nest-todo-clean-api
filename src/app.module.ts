import { HTTPExceptionsFilter } from '@libs/filters/http-exception.filter';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HTTPExceptionsFilter,
    },
  ],
})
export class AppModule {}
