import { Test, TestingModule } from '@nestjs/testing';
import { AccountsCategoriesController } from './accounts-categories.controller';

describe('AccountsCategories Controller', () => {
  let controller: AccountsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsCategoriesController],
    }).compile();

    controller = module.get<AccountsCategoriesController>(AccountsCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
