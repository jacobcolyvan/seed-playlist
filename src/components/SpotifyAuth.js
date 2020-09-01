import React from 'react';
import Button from '@material-ui/core/Button';

const SpotifyAuth = () => {
  const scopes = [
    'user-read-private',
    'playlist-read-private',
    'user-library-read'
  ];

  return (
    <div id='auth-page'>
      <div>
        <p>
          This is a website that asks Spotify to make you a playlist based on
          the information you give it. <br />
          Essentially a website for creating your own daily mixes.
        </p>
        <br />
        <p style={{ margin: '8px 0 12px 0'}}>
          You'll have to authorise Spotify before you can start making
          playlists:
        </p>

        <a
          href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${
            process.env.REACT_APP_SPOTIFY_CLIENT_ID2
          }&scope=${scopes.join('%20')}&redirect_uri=${encodeURIComponent(
            process.env.REACT_APP_SPOTIFY_CALLBACK_URI
          )}&show_dialog=false`}
        >
          <Button variant='outlined' color='primary' fullWidth>
            Authorise Spotify
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SpotifyAuth;
