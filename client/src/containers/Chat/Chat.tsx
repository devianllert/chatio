import React, { useEffect, ReactElement } from 'react';
import { connect } from 'react-redux';

import { Message } from './types';
import { AppState } from '../../types';

import { addMessage, loadMessages } from './actions';

import ChatWindow from './ChatWindow';
import ChatPanel from './ChatPanel';

import socket from '../../utils/socket';

import style from './chat.module.scss';

interface Props {
  messages: Message[];
  addMessage: Function;
  loadMessages: Function;
}

/* eslint-disable */

const Chat = ({ messages, addMessage, loadMessages }: Props): ReactElement => {

  useEffect((): void => {
    socket.on('LOAD_MESSAGES', (messages: Message[]): void => loadMessages(messages));
    socket.on('ADD_MESSAGE', (message: Message): void => addMessage(message));

    socket.emit('LOAD_MESSAGES');

    // @ts-ignore
    return (): void => {
      socket.off('LOAD_MESSAGES');
      socket.off('ADD_MESSAGE');
    };
  }, []);

  const submitMessage = (text: string): void => {
    socket.emit('ADD_MESSAGE', text);
  };

  return (
    <div className={style.chat}>
      <ChatWindow messages={messages} />
      <ChatPanel submitMessage={submitMessage} />
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  messages: state.chat.messages,
});

const mapDispatchToProps = {
  addMessage: addMessage,
  loadMessages: loadMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
