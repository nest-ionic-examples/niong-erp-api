import { ObjectId } from 'bson';
import { prop, Typegoose } from 'typegoose';

export class AccountType extends Typegoose {
  _id: string | ObjectId;

  @prop({default: ''})
  name: string;

  @prop()
  sequence: number;
}
