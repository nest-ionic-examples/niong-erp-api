import { ObjectId } from 'bson';

export class User {
  _id: string | ObjectId;

  username;

  password;

  loggedIn;

  role;
}
