import React from 'react';
import { Typography, AppBar, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navbar = ({onAboutPage, setOnAboutPage}) => {
  const history = useHistory();



  return (
    <>
      <AppBar
        position='static'
        color='default'
        style={{ backgroundColor: '#303030', padding: '4px 0'}}
      >
        <Container maxWidth='md' style={{ padding: '0 12px', display: 'flex', justifyContent: 'space-between'}} >
          <Typography
            variant='h3'
            className='navbar-title'
          >
            <span
              className='navbar-title-text'
              onClick={() => {
                setOnAboutPage(false)
                history.push('/')
              }}
            >
              Seed Playlists
            </span>
          </Typography>
          {!onAboutPage && (
            < Button
              variant='outlined'
              color='secondary'
              onClick={() => {
                setOnAboutPage(true)
                history.push('/about');
              }}
              id="about-button"
            >
              About
            </ Button>
          )}

        </Container>

      </AppBar>
    </>
  );
};

export default Navbar;
