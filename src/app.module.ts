import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsModule } from './models/models.module';
import { config } from 'dotenv';
import { AccountsCategoriesController } from './controllers/accounts-categories.controller';
import { AccountTypesController } from './controllers/account-types.controller';
import { BillOfMaterialsController } from './controllers/bill-of-materials.controller';
import { BonusTypesController } from './controllers/bonus-types.controller';
import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

config({path: `environments/${process.env.NODE_ENV || 'local'}.env`});

mongoose.set('debug', true);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL, {user: 'niong-erp-admin', pass: 'Password1@3'}),
    ModelsModule,
  ],
  controllers: [
    AppController,
    AccountsCategoriesController,
    AccountTypesController,
    BillOfMaterialsController,
    BonusTypesController
  ],
  providers: [AppService],
})
export class AppModule {}
