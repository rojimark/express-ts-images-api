import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {
  create,
  getOne,
  getMultiple,
  deleteOne,
  modify
} from './image.service';
import { IImage } from './image.interface';

const createImage = (req: Request, res: Response) => {
  const image = req.body as IImage;
  create(image);
  res.status(httpStatus.CREATED);
  res.send({ message: 'Created' });
};

const getImage = (req: Request, res: Response) => {
  const id = req.params.id as string;
  getOne(id);
  res.status(httpStatus.OK);
  res.send({ message: 'Image Found!' });
};

export { createImage, getOne, getMultiple, deleteOne, modify };
