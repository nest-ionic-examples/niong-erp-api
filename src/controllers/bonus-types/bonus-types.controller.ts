import { Controller } from '@nestjs/common';
import { ReadController } from '../read.controller';
import { InjectModel } from 'nestjs-typegoose';
import { BonusType } from '../../models/bonus-type';

@Controller('bonus-types')
export class BonusTypesController extends ReadController<BonusType> {
  constructor(@InjectModel(BonusType) model) { super(model); }
}
