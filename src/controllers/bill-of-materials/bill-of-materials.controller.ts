import { Controller } from '@nestjs/common';
import { ReadController } from '../read.controller';
import { BillOfMaterial } from '../../models/bill-of-material';
import { InjectModel } from 'nestjs-typegoose';

@Controller('bill-of-materials')
export class BillOfMaterialsController extends ReadController<BillOfMaterial> {
  constructor(@InjectModel(BillOfMaterial) model) { super(model); }

}
