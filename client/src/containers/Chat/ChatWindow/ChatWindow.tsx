import React, { ReactElement } from 'react';

import ChatMessage from '../ChatMessage';

import style from './window.module.scss';

interface Props {
  messages: import('../types').Message[];
}

const ChatWindow = ({ messages }: Props): ReactElement => (
  <div className={style.window}>
    {messages.map(
      (message): ReactElement => (
        <ChatMessage key={message.id} {...message} />
      ),
    )}
  </div>
);

export default ChatWindow;
