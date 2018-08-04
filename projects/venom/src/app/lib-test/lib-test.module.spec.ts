import { LibTestModule } from './lib-test.module';

describe('LibTestModule', () => {
  let libTestModule: LibTestModule;

  beforeEach(() => {
    libTestModule = new LibTestModule();
  });

  it('should create an instance', () => {
    expect(libTestModule).toBeTruthy();
  });
});
