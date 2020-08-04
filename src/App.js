import React, { useState } from 'react';
import Form from './components/Form';
import ShowTracks from './components/ShowTracks';
import { Container } from '@material-ui/core';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [tracks, setTracks] = useState(undefined);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth='sm'>
          <h1>Seed Playlists</h1>
          <Form setTracks={setTracks} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;

//   <div>
//     <h1>Seed Playlists</h1>
//     <ShowTracks />
//   </div>

// </div>
