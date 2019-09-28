import { ObjectId } from 'bson';
import { prop } from 'typegoose';

export class BillOfMaterialLine {
  @prop({ref: 'Product', default: null})
  component: ObjectId;

  @prop({default: 0})
  quantity: number;

  @prop({default: ''})
  info: string;
}
