import { Test, TestingModule } from '@nestjs/testing';
import { BillOfMaterialsController } from './bill-of-materials.controller';

describe('BillOfMaterials Controller', () => {
  let controller: BillOfMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillOfMaterialsController],
    }).compile();

    controller = module.get<BillOfMaterialsController>(BillOfMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
