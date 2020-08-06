import React, { useEffect } from 'react';
import Form from '../components/Form';
import SpotifyAuth from '../components/SpotifyAuth';
import { useHistory } from 'react-router-dom';

const Home = ({ setTracks, tracks, token, setToken, location }) => {
  const history = useHistory();

  useEffect(() => {
    if (location.hash.split('=')[1]) {
      setToken(location.hash.split('=')[1]);
      history.push('/');
    }
  }, [setToken, history, location.hash]);

  useEffect(() => {
    console.log('gg');
    if (tracks) {
      history.push('/recs');
    }
  }, [tracks, history]);

  return (
    <div>
      <h1>Seed Playlists</h1>
      {token ? (
        <Form setTracks={setTracks} token={token} tracks={tracks} />
      ) : (
        <SpotifyAuth />
      )}
      {tracks}
    </div>
  );
};

export default Home;
