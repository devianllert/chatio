import React, { ReactElement } from 'react';

import ChatWindow from '../../components/ChatWindow';

import style from './chat.module.scss';

const Chat = (): ReactElement => (
  <div className={style.chat}>
    <ChatWindow />
  </div>
);

export default Chat;
