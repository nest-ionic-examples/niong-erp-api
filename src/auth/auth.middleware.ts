import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '../models/user';
import jwt = require('express-jwt');

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@InjectModel(User) private readonly userModel: ReturnModelType< typeof User>) {}

  use(req, res, next) {
    jwt({
      secret: process.env.JWT_SECRET_PASSWORD,
      isRevoked: async (req1, payload, done) => {
        if (!payload._id) {
          return done(new UnauthorizedException('The token contains invalid credentials or has expired'));
        }

        const user = await this.userModel.findById(payload._id).exec();
        if (!user || !user.loggedIn) return done(new UnauthorizedException('The user has been logged out'));

        done(null, false);
      },
    }).unless({path: ['/', '/login', '/sign-up']})(req, res, next);
  }
}
