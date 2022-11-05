import { Router } from 'express';

import user from './components/user/user.router'
import image from './components/image/image.router'

const router: Router = Router();
router.use(user);
router.use(image);

export default router;
