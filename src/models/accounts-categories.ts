import { prop, Typegoose } from 'typegoose';
import { ObjectId } from 'bson';
import { ActionBy } from './action-by';

export class AccountsCategories extends Typegoose {
  _id: string | ObjectId;

  @prop({default: 'All'})
  name: string;

  @prop({default: 'All'})
  fullName: string;

  @prop({ref: 'AccountsCategory', default: null})
  parent: ObjectId;

  @prop({default: null})
  child: ObjectId[];

  @prop({ref: 'Users', default: null})
  users: ObjectId[];

  @prop()
  createdBy: ActionBy;

  @prop()
  editedBy: ActionBy;

  @prop({default: 0})
  nestingLevel: number;

  @prop({default: 0})
  sequence: number;

  @prop({default: false})
  main: boolean;

  @prop({default: true})
  removable: boolean;

  @prop({default: 0})
  productsCount: number;

}
