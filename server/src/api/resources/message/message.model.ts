import {
  Model,
  BuildOptions,
  STRING,
} from 'sequelize';
import { db } from '../../../config/db';

interface Message extends Model {
  author: string;
  message: string;
}

export type MessageStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Message;
}

const Message = db.define('message', {
  author: {
    type: STRING,
  },
  message: {
    type: STRING,
  },
}) as MessageStatic;

export default Message;
