import React, { useState } from 'react';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Navbar from './components/Navbar';

import { Container } from '@material-ui/core';
import './App.scss';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const App = () => {
  const [tracks, setTracks] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const [playlistDescription, setPlaylistDescription] = useState('');

  return (
    <div className='main'>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Container maxWidth='md' style={{ padding: '0 8px' }}>
            <Paper variant='outlined' style={{padding: '12px', margin:'24px 0'}}>
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
                      setPlaylistDescription={setPlaylistDescription}
                    />
                  )}
                />

                <Route
                  exact
                  path='/recs'
                  render={() => (
                    <Tracks
                      tracks={tracks}
                      token={token}
                      playlistDescription={playlistDescription}
                    />
                  )}
                />

                <Redirect to='/' />
              </Switch>
            </Paper>
          </Container>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
