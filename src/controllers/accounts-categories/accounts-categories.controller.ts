import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { AccountsCategories } from '../../models/accounts-categories';
import { ReadController } from '../read.controller';

@Controller('accounts-categories')
export class AccountsCategoriesController extends ReadController<AccountsCategories> {
  constructor(@InjectModel(AccountsCategories) model) { super(model); }
}
