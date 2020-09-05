import React from 'react';
import { Typography, AppBar, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  return (
    <>
      <AppBar
        position='static'
        color='default'
        style={{ backgroundColor: '#303030', padding: '4px 0' }}
      >
        <Container maxWidth='md' style={{ padding: '0 12px' }} >
          <Typography
            variant='h3'
            style={{ color: 'white' }}
            onClick={() => {history.push('/')}}
          >
            Seed Playlists
          </Typography>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
