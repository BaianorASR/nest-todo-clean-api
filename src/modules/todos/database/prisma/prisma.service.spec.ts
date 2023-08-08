import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
  });

  it('should be able to connect to the database when the onModuleInit method is called', async () => {
    const connectSpy = jest.spyOn(prismaService, '$connect');
    await prismaService.onModuleInit();
    expect(connectSpy).toHaveBeenCalled();
  });

  it('should be able to register a shutdown hook when the enableShutdownHooks method is called', () => {
    const app = { close: jest.fn() };
    const onSpy = jest.spyOn(prismaService, '$on');

    onSpy.mockImplementation((event, cb: any) => {
      if (event === 'beforeExit') {
        cb();
      }
    });

    prismaService.enableShutdownHooks(app as any);
    expect(onSpy).toHaveBeenCalledWith('beforeExit', expect.any(Function));
    expect(app.close).toHaveBeenCalled();
  });
});
