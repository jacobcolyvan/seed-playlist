import React, { useState } from 'react';
import Input from './Input';
import InputSeed from './InputSeed';
import GenreSelect from './GenreSelect';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = ({ setTracks, token, setPlaylistDescription }) => {
  const history = useHistory();

  const [genre, setGenre] = useState(undefined);
  const [artistSeed, setArtistSeed] = useState(undefined);
  const [trackSeed, setTrackSeed] = useState(undefined);
  const [activeParams, setActiveParams] = useState([]);

  const [artistSearchOptions, setArtistSearchOptions] = useState([]);
  const [trackSearchOptions, setTrackSearchOptions] = useState([]);

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
          setPlaylistDescription(createPlaylistDescription())
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

  const createPlaylistDescription = () => {
    let description = `A playlist generated with the `

    if (genre) description += `genres of [${genre.join(', ')}], `;
    if (artistSeed) description += `artists including [${artistSeed.join(', ')}], `;
    if (trackSeed) description += `tracks including [${trackSeed.join(', ')}], `;

    description += `and a few other paramaters that nobody has time for!`

    console.log(description);
    return description

  }

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
    if (artistSeed) url += `&seed_artists=${artistSeed.join(',')}`;
    if (trackSeed) url += `&seed_tracks=${trackSeed.join(',')}`;

    // console.log(activeParams);
    Object.keys(activeParams).forEach((param) => {
      url += `&target_${param}=${activeParams[param]}`;
    });

    // console.log(url);
    return url;
  };

  const searchSpotify = async (query, type) => {
    if (query) {
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

        searchResults = searchResults.data;
        if(type === 'artist') {
          const searchItems = searchResults.artists.items.map(item => {
            return { name: item.name, id: item.id};
          })
          setArtistSearchOptions(searchItems)
        } else {
          const searchItems = searchResults.tracks.items.map(item => {
            return { name: `${item.name} – ${item.artists[0].name}`, id: item.id};
          })
          setTrackSearchOptions(searchItems)
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <div>
      <p>The only requirement is that you choose at least one genre, artist, OR track (up to 5 of each). Required ranges are between 0 and 1, unless specified otherwise.</p>
      <p>For information about a specific feature visit <a href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/" target="_blank" rel="noopener noreferrer">here</a>.</p>

      <hr/>

      <form>
        <GenreSelect genre={genre} setGenre={setGenre} />
        <InputSeed
          title='artists'
          seedValue={artistSeed}
          setSeedValue={setArtistSeed}
          searchSpotify={searchSpotify}
          searchOptions={artistSearchOptions}
          type='artist'
        />
        <InputSeed
          title='tracks'
          seedValue={trackSeed}
          setSeedValue={setTrackSeed}
          searchSpotify={searchSpotify}
          searchOptions={trackSearchOptions}
          type='track'
        />
        <br />

        <Input title='instrumentalness' saveParam={saveActiveParam} limit={1} />
        <Input title='valence' saveParam={saveActiveParam} limit={1} />
        <Input title='acousticness' saveParam={saveActiveParam} limit={1} />
        <Input title='dancebility' saveParam={saveActiveParam} limit={1} />
        <Input title='energy' saveParam={saveActiveParam} limit={1} />
        <Input title='liveness' saveParam={saveActiveParam} limit={1} />
        <Input title='speechiness' saveParam={saveActiveParam} limit={1} />

        <br/><br/>
        <Input title='popularity' saveParam={saveActiveParam} limit={100} />
        <Input title='tempo' saveParam={saveActiveParam} limit={200} />
        <Input title='key' saveParam={saveActiveParam} limit={11} />
        {/* loudness -60 - 0; mode = 0 or 1 */}
        {/* <Input title='loudness' saveParam={saveActiveParam} limit={1}/> */}
        {/* <Input title='mode' saveParam={saveActiveParam} limit={1}/> */}
        
        <br/><br/><br/>
        <Button variant='outlined' color='primary' fullWidth onClick={onSubmit}>
          Generate
        </Button>
      </form>
    </div>
  );
};

export default Form;
