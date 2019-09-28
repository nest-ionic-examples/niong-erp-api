import { Controller } from '@nestjs/common';
import { ReadController } from '../read.controller';
import { InjectModel } from 'nestjs-typegoose';
import { AccountType } from '../../models/account-type';

@Controller('account-types')
export class AccountTypesController extends ReadController<ArrayBufferTypes> {
  constructor(@InjectModel(AccountType) model) { super(model); }
}
