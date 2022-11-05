import AppError from '../../core/utils/appError';
import logger from '../../core/utils/logger';
import httpStatus from 'http-status';
import { IImage } from './image.interface';
import { createClient } from 'pexels';
import config from '../../config/config';

const client = createClient(config.pexelsApiKey);

let imageStorage: Array<IImage> = [];

const create = (image: IImage): boolean => {
  if (imageStorage.push(image)) {
    logger.debug(`User created: %O`, image);
    return true;
  }
  throw new AppError(httpStatus.BAD_GATEWAY, 'User was not created!');
};

const getOne = (id: string): IImage => {
  logger.debug(`Image found.`);
  return imageStorage[0];
};

const getMultiple = async(userLimit):Promise<IImage[]> => {
  const limit = userLimit > 0 && userLimit < 11 ? userLimit : 5;
  const res = await client.photos.search({query:'',per_page:limit})
  logger.debug(`Image found.`);
  return imageStorage;
};

const modify = (image: IImage): boolean => {
  return true;
}

const deleteOne = (id: string): boolean => {
  return true;
}

export { create, getOne, getMultiple, modify, deleteOne };
