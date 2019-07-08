import React, { ReactElement } from 'react';
import classnames from 'classnames';

import style from './message.module.scss';

type Props = import('../types').Message;

const ChatMessage = ({ author, message }: Props): ReactElement => (
  <div className={classnames(style.message, style.in)}>
    <div className={style.author}>{author}</div>

    <div className={style.body}>{message}</div>
  </div>
);

export default ChatMessage;
