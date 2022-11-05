import { Router } from 'express';

import protectedByApiKey from '../../core/middlewares/apiKey.middleware';
import validation from '../../core/middlewares/validate.middleware';
import { createImage, getOne, getMultiple, deleteOne, modify } from './image.controller';
import imageValidation from './createImage.validation';

const router: Router = Router();

// e.g. createUser request's body is validated and protected by api-key
router
.get(
  '/images/:id',
  [protectedByApiKey],
  getOne
)
.get(
  '/images/',
  [protectedByApiKey],
  getMultiple
)
.post(
  '/images/',
  [protectedByApiKey, validation(imageValidation)],
  createImage,
)
.patch(
  '/images/:id',
  [protectedByApiKey, validation(imageValidation)],
  modify
)
.delete(
  '/images/:id',
  [protectedByApiKey],
  deleteOne
)

export default router;
