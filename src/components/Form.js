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
  const [acousticness, setAcousticness] = useState(undefined);
  const [danceability, setDanceability] = useState(undefined);
  const [energy, setEnergy] = useState(undefined);
  const [liveness, setLiveness] = useState(undefined);
  const [loudness, setLoudness] = useState(undefined);
  const [mode, setMode] = useState(undefined);
  const [popularity, setPopularity] = useState(undefined);
  const [tempo, setTempo] = useState(undefined);
  const [key, setKey] = useState(undefined);

  const [genre, setGenre] = useState(undefined);

  const [activeParams, setActiveParams] = useState([]);
  // const activeParams = {};
  // const url =

  const getRecommendedTracks = async () => {
    try {
      const url = generateUrl();

      axios({
        method: 'get',
        url: url,
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

  const saveActiveParam = (param_name, value) => {
    if (value >= 0 && value <= 1) {
      let tempList = activeParams;
      tempList[param_name] = value;

      setActiveParams(tempList);
      console.log(activeParams);
    }
  };

  const generateUrl = () => {
    let url = `https://api.spotify.com/v1/recommendations?market=AU&seed_genres=${genre.join(
      ','
    )}`;
    console.log(activeParams);
    Object.keys(activeParams).forEach((param) => {
      url += `&target_${param}=${activeParams[param]}`;
    });
    console.log(url);
    return url;
  };

  return (
    <div>
      <form>
        <Input
          title='instrumentalness'
          setValue={setInstrumentalness}
          saveParam={saveActiveParam}
          value={instrumentalness}
        />
        <Input
          title='valence'
          setValue={setValence}
          saveParam={saveActiveParam}
          value={valence}
        />
        <Input
          title='acousticness'
          setValue={setAcousticness}
          saveParam={saveActiveParam}
          value={acousticness}
        />
        {/* <Input title='Valence' setValue={setValence} />
        <Input title='Valence' setValue={setValence} />
        <Input title='Valence' setValue={setValence} /> */}

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
