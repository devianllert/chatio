import { Router } from 'express';

import * as messagesController from './message.controller';

const router = Router();

// @route   GET api/messages
// @desc    Get Messages
// @access  Public
router.get('/', messagesController.getAllMessages);

// @route   POST api/messages
// @desc    Create Message
// @access  Private
router.post('/', messagesController.createMessage);

export default router;
