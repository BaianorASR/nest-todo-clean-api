export abstract class IUserRepository {
  abstract findAll(): Promise<any>;
}
