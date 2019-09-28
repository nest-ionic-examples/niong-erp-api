import { ObjectId } from 'bson';
import { prop, Typegoose } from 'typegoose';

export class Campaign extends Typegoose {
  _id: string | ObjectId;

  @prop({default: ''})
  name: string;

  @prop({default: 0})
  sequence: number;
}
