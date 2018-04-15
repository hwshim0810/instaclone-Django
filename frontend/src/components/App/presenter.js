import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import Footer from 'components/Footer';

const App = props => [
  // Nav,
  props.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />,
  // Need key when react return array
  <Footer key={3} />
];

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "feed"} />
    <Route exact path="/explore" render={() => "explore"} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "login"} />
    <Route exact path="/forgat" render={() => "password"} />
  </Switch>
);

export default App;
