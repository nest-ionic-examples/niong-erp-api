import { ObjectId } from 'bson';
import { prop } from '@typegoose/typegoose';

export class AccountType {
  _id: string | ObjectId;

  @prop({default: ''})
  name: string;

  @prop()
  sequence: number;
}
