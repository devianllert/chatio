import React, { ReactElement } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const App = (): ReactElement => (
  <>
    <header>
      <div>Header</div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={(): ReactElement => <h1>Home</h1>} />
        <Route path="/about" component={(): ReactElement => <h1>About</h1>} />
        <Route path="/contact" component={(): ReactElement => <h1>Contact</h1>} />
        <Route component={(): ReactElement => <h1>Not Found</h1>} />
      </Switch>
    </main>
  </>
);

export default App;
