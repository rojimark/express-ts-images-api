import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {
  create
} from './user.service';
import { IUser } from './user.interface';

const createUser = (req: Request, res: Response) => {
  const user = req.body as IUser;
  create(user);
  res.status(httpStatus.CREATED);
  res.send({ message: 'Created' });
};


export { createUser };
