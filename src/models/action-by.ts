import { ObjectId } from 'bson';
import { prop } from '@typegoose/typegoose';

export class ActionBy {
  @prop({ref: 'Users', default: null})
  user: ObjectId;

  @prop({default: Date.now})
  date: Date;
}
