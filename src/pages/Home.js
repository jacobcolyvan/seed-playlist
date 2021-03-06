import React, { useEffect } from 'react';
import Form from '../components/Form';
import SpotifyAuth from '../components/SpotifyAuth';
import { useHistory } from 'react-router-dom';

const Home = ({ setTracks, tracks, token, setToken, location, setPlaylistDescription }) => {
  const history = useHistory();

  useEffect(() => {
    if (location.hash.split('=')[1]) {
      setToken(location.hash.split('=')[1]);
      history.push('/');
    }
  }, [setToken, history, location.hash]);

  useEffect(() => {
    if (tracks) {
      history.push('/recs');
    }
  }, [tracks, history]);

  return (
    <div>
      {token ? (
        <Form setTracks={setTracks} token={token} tracks={tracks} setPlaylistDescription={setPlaylistDescription} />
      ) : (
        <SpotifyAuth />
      )}
    </div>
  );
};

export default Home;
