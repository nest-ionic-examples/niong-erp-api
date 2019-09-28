import { Typegoose } from 'typegoose';
import { ObjectId } from 'bson';

export class User extends Typegoose {
  _id: string | ObjectId;

  username;

  password;

  loggedIn;

  role;
}
