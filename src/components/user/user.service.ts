import  config  from '../../config/config';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import AppError from '../../core/utils/appError';
import logger from './../../core/utils/logger';
import httpStatus from 'http-status';
import { IUser } from './user.interface';

//temporary storage. Will setup in db later
let userStorage: Array<IUser> = [];

const salt = 10;

const create = async(user: IUser): Promise<boolean> => {
  user.role = "user";
  const {password} = user;
  user.password = await bcrypt.hash(password,salt);
  if (userStorage.push(user)) {
    logger.debug(`User created`);
    return true;
  }
  throw new AppError(httpStatus.BAD_GATEWAY, 'User was not created!');
};


export { create};
