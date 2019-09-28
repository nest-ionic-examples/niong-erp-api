import { ObjectId } from 'bson';
import { prop } from 'typegoose';

export class Brand {
  _id: string | ObjectId;

  @prop({default: 'default'})
  name: string;

  @prop({default: Date.now})
  creationDate: Date;
}
