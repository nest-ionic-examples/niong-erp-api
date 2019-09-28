import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsModule } from './models/models.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { config } from 'dotenv';
import { AccountsCategoriesController } from './controllers/accounts-categories/accounts-categories.controller';
import { AccountTypesController } from './controllers/account-types/account-types.controller';
import { BillOfMaterialsController } from './controllers/bill-of-materials/bill-of-materials.controller';
import { BonusTypesController } from './controllers/bonus-types/bonus-types.controller';
import * as mongoose from 'mongoose';

config({path: `environments/${process.env.NODE_ENV || 'local'}.env`});

mongoose.set('debug', true);

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.DB_URL, {useNewUrlParser: true, mongos: Boolean(process.env.DB_MONGOS)}),
    ModelsModule,
  ],
  controllers: [AppController, AccountsCategoriesController, AccountTypesController, BillOfMaterialsController, BonusTypesController],
  providers: [AppService],
})
export class AppModule {}
