import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Navigation from "components/Navigation";
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Feed from 'components/Feed';
import Explore from 'components/Explore';
import Search from 'components/Search';

const App = props => [
  // Nav,
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  // Need key when react return array
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route key="1" exact path="/" component={Feed} />
    <Route key="2" exact path="/explore" component={Explore} />
    <Route key="3" path="/search/:term" component={Search} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/forgat" render={() => "password"} />
  </Switch>
);

export default App;
