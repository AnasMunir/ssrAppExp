import { FishryRoutesModule } from './fishry-routes.module';

describe('FishryRoutesModule', () => {
  let fishryRoutesModule: FishryRoutesModule;

  beforeEach(() => {
    fishryRoutesModule = new FishryRoutesModule();
  });

  it('should create an instance', () => {
    expect(fishryRoutesModule).toBeTruthy();
  });
});
