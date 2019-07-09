import React, { useLayoutEffect, ReactElement } from 'react';

import ChatMessage from '../ChatMessage';

import style from './window.module.scss';

interface Props {
  messages: import('../types').Message[];
}

const ChatWindow = ({ messages }: Props): ReactElement => {
  let chatWindow: HTMLDivElement;

  useLayoutEffect((): void => {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className={style.window} ref={(el: HTMLDivElement): void => { chatWindow = el; }}>
      {messages.map(
        (message): ReactElement => (
          <ChatMessage key={message.id} {...message} />
        ),
      )}
    </div>
  );
};

export default ChatWindow;
