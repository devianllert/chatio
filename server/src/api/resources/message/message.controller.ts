import { Request, Response } from 'express';

import Message, { MessageStatic } from './message.model';

const getAllMessages = async (req: Request, res: Response): Promise<Response> => {
  try {
    const messages: MessageStatic[] = await Message.findAll();

    return res.json(messages);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createMessage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const message: MessageStatic = await Message.create({
      author: req.body.author,
      message: req.body.message,
    });

    return res.send(message);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getAllMessages, createMessage };
