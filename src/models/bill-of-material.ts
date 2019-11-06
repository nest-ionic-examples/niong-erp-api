import { ObjectId } from 'bson';
import { prop } from '@typegoose/typegoose';
import { BillOfMaterialLine } from './bill-of-material-line';

export class BillOfMaterial {
  _id: string | ObjectId;

  @prop({unique: true, default: 'BM'})
  name: string;

  @prop({ref: 'Product', default: null})
  product: ObjectId;

  @prop({ref: 'routing', default: null})
  routing: ObjectId;

  @prop({default: false})
  isComponent: boolean;

  @prop({default: 0})
  quantity: number;

  @prop({default: ''})
  description: string;

  @prop()
  components: BillOfMaterialLine[];

  @prop({default: Date.now})
  creationDate: Date;

}
