import React, { useEffect } from 'react';
import Form from '../components/Form';
import SpotifyAuth from '../components/SpotifyAuth';
import { useHistory } from 'react-router-dom';

const Home = ({ setTracks, token, setToken, location }) => {
  const history = useHistory();

  useEffect(() => {
    if (location.hash.split('=')[1]) {
      setToken(location.hash.split('=')[1]);
      history.push('/');
    }
  }, [setToken, history]);

  console.log(token);
  return (
    <div>
      <h1>Seed Playlistws</h1>
      {token ? <Form setTracks={setTracks} /> : <SpotifyAuth />}
    </div>
  );
};

export default Home;
