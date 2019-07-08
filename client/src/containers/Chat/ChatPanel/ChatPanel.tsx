import React, { ReactElement } from 'react';

import style from './panel.module.scss';

const ChatPanel = (): ReactElement => (
  <div className={style.panel}>
    <textarea placeholder="Enter message..." className={style.input} />
    <button className={style.submit} type="button">
      <i className="material-icons">send</i>
    </button>
  </div>
);

export default ChatPanel;
