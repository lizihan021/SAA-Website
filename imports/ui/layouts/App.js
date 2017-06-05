import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../components/AppNavigation';

const realChildren = children => ((children.props.route.name == "index" || 
									children.props.route.name == "home") ? 
									(children) : (<Grid> {children} </Grid>))

const App = ({ children }) => (
  <div>
    <AppNavigation />
      { realChildren(children) }
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
