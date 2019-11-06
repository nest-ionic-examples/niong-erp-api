import { ObjectId } from 'bson';
import { prop } from '@typegoose/typegoose';

export class Campaign {
  _id: string | ObjectId;

  @prop({default: ''})
  name: string;

  @prop({default: 0})
  sequence: number;
}
