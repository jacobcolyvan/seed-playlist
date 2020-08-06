import React, { useState } from 'react';
import Input from './Input';
import GenreSelect from './GenreSelect';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = ({ setTracks, token, tracks }) => {
  const history = useHistory();
  const [instrumentalness, setInstrumentalness] = useState(undefined);
  const [valence, setValence] = useState(undefined);
  const [genre, setGenre] = useState(undefined);

  const getRecommendedTracks = async () => {
    try {
      axios({
        method: 'get',
        url: `https://api.spotify.com/v1/recommendations?market=AU&seed_genres=${genre}`,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
        .then((data) => {
          const trackInfo = data.data.tracks.map((track) => [
            track.name,
            track.artists[0].name,
            track.preview_url,
            track.id
          ]);
          console.log(trackInfo);
          setTracks(trackInfo);
        })
        .then(() => history.push('/recs'));

      // creates and sets the track recommendation arrays
      // const trackIds = trackRecs.data.tracks.map(
      //   (track) => `spotify:track:${track.id}`
      // );
    } catch (err) {
      console.log(err.message);
      console.log('There was an error getting recommended tracks');
    }
  };

  const onSubmit = async () => {
    if (genre) {
      console.log([valence, instrumentalness, genre]);
      await getRecommendedTracks();
    } else {
      //setError to "pick a genre/artist/track ya twat"
      console.log('You need a genre mate');
    }
  };

  return (
    <div>
      <p>{genre || 'no genre'}</p>
      <form>
        <Input title='Instrumentalness' setValue={setInstrumentalness} />
        <Input title='Valence' setValue={setValence} />
        <GenreSelect genre={genre} setGenre={setGenre} />

        <br />
        <Button variant='outlined' color='primary' fullWidth onClick={onSubmit}>
          Generate
        </Button>
      </form>
    </div>
  );
};

export default Form;
