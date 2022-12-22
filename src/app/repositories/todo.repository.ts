export abstract class ITodoRepository {
  abstract findAll(): Promise<any>;
}
