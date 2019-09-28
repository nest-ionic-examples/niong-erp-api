import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AccountsCategories } from './accounts-categories';
import { AccountType } from './account-type';
import { BillOfMaterial } from './bill-of-material';
import { BonusType } from './bonus-type';

const providers = TypegooseModule.forFeature([
  AccountsCategories,
  AccountType,
  BillOfMaterial,
  BonusType,
]).providers;

@Module({
  providers,
  exports: providers,
})
export class ModelsModule {}
