import { Test, TestingModule } from '@nestjs/testing';
import { BonusTypesController } from './bonus-types.controller';

describe('BonusTypes Controller', () => {
  let controller: BonusTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonusTypesController],
    }).compile();

    controller = module.get<BonusTypesController>(BonusTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
