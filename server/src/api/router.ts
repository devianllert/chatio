import { Router } from 'express';

import messageRouter from './resources/message';

const router: Router = Router();

router.use('/messages', messageRouter);

export default router;
