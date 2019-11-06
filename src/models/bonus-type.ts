import { ObjectId } from 'bson';
import { prop } from '@typegoose/typegoose';

export class BonusType {
  _id: string | ObjectId;

  @prop()
  name: string;

  @prop({enum: ['HR', 'Sales', 'Developer', 'PM'], default: 'Developer'})
  bonusType: string;

  @prop()
  value: number;

  @prop()
  isPercent: boolean;
}
