import React, { useState, ReactElement } from 'react';

import style from './panel.module.scss';

interface Props {
  submitMessage: Function;
}

const ChatPanel = ({ submitMessage }: Props): ReactElement => {
  const [value, setValue] = useState<string>('');

  const handleClick = (): void => {
    if (!value.trim()) {
      return;
    }

    submitMessage(value);
    setValue('');
  };

  return (
    <div className={style.panel}>
      <textarea
        value={value}
        onChange={(e): void => setValue(e.target.value)}
        placeholder="Enter message..."
        className={style.input}
      />
      <button className={style.submit} type="button" onClick={handleClick}>
        <i className="material-icons">send</i>
      </button>
    </div>
  );
};

export default ChatPanel;
