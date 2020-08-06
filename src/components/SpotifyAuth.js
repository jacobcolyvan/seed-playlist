import React from 'react';

const SpotifyAuth = () => {
  const scopes = [
    'user-read-private',
    'playlist-read-private',
    'user-library-read'
  ];

  return (
    <div>
      <p>
        <a
          href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${
            process.env.REACT_APP_SPOTIFY_CLIENT_ID2
          }&scope=${scopes.join('%20')}&redirect_uri=${encodeURIComponent(
            process.env.REACT_APP_SPOTIFY_CALLBACK_URI
          )}&show_dialog=true`}
        >
          Authorise Spotify
        </a>
      </p>
    </div>
  );
};

export default SpotifyAuth;
