import { ObjectId } from 'bson';
import { prop, Typegoose } from 'typegoose';

export class BonusType extends Typegoose {
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
