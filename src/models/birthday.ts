import { ObjectId } from 'bson';
import { prop } from 'typegoose';

export class Birthday {
  _id: string | ObjectId;

  @prop()
  date: Date;

  @prop()
  currentEmployees: {
    weekly: [],
    nextweek: [],
    monthly: []
  };
}
