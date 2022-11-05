import { Router } from 'express';

import protectedByApiKey from './../../core/middlewares/apiKey.middleware';
import validation from './../../core/middlewares/validate.middleware';
import { createUser } from './user.controller';
import createUserValidation from './createUser.validation';

const router: Router = Router();

// e.g. createUser request's body is validated and protected by api-key
router.post(
  '/user/',
  [ validation(createUserValidation)],
  createUser,
);

export default router;
