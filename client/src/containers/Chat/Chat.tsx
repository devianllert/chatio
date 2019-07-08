import React, { ReactElement } from 'react';

import ChatWindow from './ChatWindow';
import ChatPanel from './ChatPanel';

import style from './chat.module.scss';

const Chat = (): ReactElement => (
  <div className={style.chat}>
    <ChatWindow />
    <ChatPanel />
  </div>
);

export default Chat;
