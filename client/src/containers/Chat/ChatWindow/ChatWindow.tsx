import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../../types';

import ChatMessage from '../ChatMessage';

import style from './window.module.scss';

interface Props {
  messages: import('../types').Message[];
}

const ChatWindow = ({ messages }: Props): ReactElement => (
  <div className={style.window}>
    {messages.map(
      (message): ReactElement => (
        <ChatMessage
          key={message.id}
          {...message}
        />
      ),
    )}
  </div>
);

const mapStateToProps = (state: AppState): Props => ({
  messages: state.chat.messages,
});

export default connect(mapStateToProps)(ChatWindow);
