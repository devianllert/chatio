import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from '../Chat';
import NotFound from '../NotFound';

import style from '../../design/common.module.scss';

const App = (): ReactElement => (
  <>
    <main className={style.container}>
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </>
);

export default App;
