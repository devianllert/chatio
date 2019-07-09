import { Router } from 'express';

import * as messageController from './message.controller';

const router = Router();

// @route   GET api/v1/messages
// @desc    Get Messages
// @access  Public
router.get('/', messageController.getAllMessages);

// @route   POST api/v1/messages
// @desc    Create Message
// @access  Public
router.post('/', messageController.createMessage);

export default router;
