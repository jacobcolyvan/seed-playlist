import React, { useState } from 'react';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import { Container } from '@material-ui/core';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const App = (props) => {
  const [tracks, setTracks] = useState(undefined);
  const [token, setToken] = useState(undefined);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth='sm'>
          <Router>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Home
                    setTracks={setTracks}
                    token={token}
                    setToken={setToken}
                    location={props.location}
                  />
                )}
              />

              <Route
                exact
                path='/recs'
                render={() => <Tracks tracks={tracks} token={token} />}
              />

              <Redirect to='/' />
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
