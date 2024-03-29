import { Body, Controller, Get, Inject, Post, UnauthorizedException } from '@nestjs/common';
// import { InjectModel } from 'nestjs-typegoose';
import { User, UserModel } from '../models/user';
import { sign } from 'jsonwebtoken';
import { compare, hash } from 'bcrypt';
import { CurrentUser } from './current-user.decorator';

@Controller('')
export class AuthController {
  constructor(@Inject(UserModel) private userModel/*: ReturnModelType<typeof User>*/) {}

  @Post('login')
  async login(@Body() credentials) {
    const user = await this.userModel.findOne({username: credentials.username}).exec();
    if (!user) throw new UnauthorizedException('The username/password combination is invalid');

    const isMatch = await compare(credentials.password, user.password);
    if (!isMatch) throw new UnauthorizedException('The username/password combination is invalid');

    user.loggedIn = true;

    await user.save();

    return {token: sign({
        _id: user._id,
        username: user.username,
        role: user.role,
      }, process.env.JWT_SECRET_PASSWORD, {expiresIn: '1h'})};
  }

  @Get('me')
  me(@CurrentUser() user) {
    return this.userModel.findById(user._id);
  }

  @Get('logout')
  async logout(@CurrentUser() user) {
    await this.userModel.findByIdAndUpdate(user._id, {loggedIn: false});
    return {message: 'Logout Successfully'};
  }

  @Post('sign-up')
  async signup(@Body() signupCredentials) {
    signupCredentials.password = await hash(signupCredentials.password, 10);
    await this.userModel.create(signupCredentials);
    return {message: 'User Created Successfully'};
  }
}
