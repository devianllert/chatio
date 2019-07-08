import React, { ReactElement } from 'react';

import style from './chat-window.module.scss';

const ChatWindow = (): ReactElement => (
  <div className={style.window}>
    <div className={style.message}>1</div>
  </div>
);


export default ChatWindow;
