import React, { useState } from 'react';
import Input from './Input';
import InputSeed from './InputSeed';
import GenreSelect from './GenreSelect';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = ({ setTracks, token }) => {
  const history = useHistory();

  const [genre, setGenre] = useState(undefined);
  const [artistSeed, setArtistSeed] = useState(undefined);
  const [trackSeed, setTrackSeed] = useState(undefined);
  const [activeParams, setActiveParams] = useState([]);

  const [searchOptions, setSearchOptions] = useState(undefined);

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
        .then(() => history.push('/recs'))
        .catch((err) => {
          console.log(err.message);
          console.log('There was an error getting recommended tracks');
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  const onSubmit = async () => {
    if (genre || artistSeed || trackSeed) {
      await getRecommendedTracks();
    } else {
      //setError to "pick a genre/artist/track ya twat"
      console.log('You need a genre mate');
    }
  };

  const saveActiveParam = (param_name, value, limit) => {
    let tempList = activeParams;

    if (!value) {
      delete tempList[param_name];
    } else if (value >= 0 && value <= limit) {
      tempList[param_name] = value;
      setActiveParams(tempList);
    }
  };

  const generateUrl = () => {
    let url = `https://api.spotify.com/v1/recommendations?market=AU`;

    if (genre) url += `&seed_genres=${genre.join(',')}`;
    if (artistSeed) url += `&seed_artists=${artistSeed}`;
    if (trackSeed) url += `&seed_artists=${artistSeed}`;

    // console.log(activeParams);
    Object.keys(activeParams).forEach((param) => {
      url += `&target_${param}=${activeParams[param]}`;
    });

    // console.log(url);
    return url;
  };

  const searchSpotify = async (query, type) => {
    try {
      const url = `https://api.spotify.com/v1/search?market=AU&type=${type}&q=${encodeURIComponent(
        query
      )}`;

      let searchResults = await axios({
        method: 'get',
        url: url,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
      searchResults = searchResults.data.artists.items;
      // const searchIds = searchResults
      const searchResultNames = searchResults.map((item) => item.name);
      const searchResultIds = searchResults.map((item) => item.id);
      setSearchOptions({names: searchResultNames, ids: searchResultIds})
      console.log({names: searchResultNames, ids: searchResultIds});
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form>
        <GenreSelect genre={genre} setGenre={setGenre} />
        <InputSeed
          title='artist id'
          setSeed={setArtistSeed}
          searchSpotify={searchSpotify}
          searchOptions={searchOptions}
        />
        {/* <InputSeed
          title='track id'
          setSeed={setTrackSeed}
          searchSpotify={searchSpotify}
        /> */}

        <br />
        <br />

        <Input title='instrumentalness' saveParam={saveActiveParam} limit={1} />
        <Input title='valence' saveParam={saveActiveParam} limit={1} />
        <Input title='acousticness' saveParam={saveActiveParam} limit={1} />
        <Input title='dancebility' saveParam={saveActiveParam} limit={1} />
        <Input title='energy' saveParam={saveActiveParam} limit={1} />
        <Input title='liveness' saveParam={saveActiveParam} limit={1} />
        <Input title='speechiness' saveParam={saveActiveParam} limit={1} />
        <Input title='popularity' saveParam={saveActiveParam} limit={100} />
        <Input title='tempo' saveParam={saveActiveParam} limit={200} />
        <Input title='key' saveParam={saveActiveParam} limit={11} />

        {/* loudness -60 - 0; mode = 0 or 1 */}
        {/* <Input title='loudness' saveParam={saveActiveParam} limit={1}/> */}
        {/* <Input title='mode' saveParam={saveActiveParam} limit={1}/> */}

        <br></br>
        <br></br>
        <Button variant='outlined' color='primary' fullWidth onClick={onSubmit}>
          Generate
        </Button>
      </form>
    </div>
  );
};

export default Form;
