import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const Tracks = ({ tracks, token }) => {
  const history = useHistory();

  useEffect(() => {
    if (!tracks) {
      history.push('/');
    }
  }, [history, tracks]);

  const addTracksToPlaylist = async (playlistId) => {
    const trackIds = tracks.map((track) => `spotify:track:${track[3]}`);
    console.log(trackIds);
    console.log(token);

    await axios({
      method: 'post',
      url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${trackIds.join(
        ','
      )}`,
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  };

  const createEmptyPlaylist = async () => {
    const spotifyRes = await axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: {
        name: `gena`,
        description: `A generated playlist`,
        public: true
      }
    });

    return spotifyRes.data.id;
  };

  const savePlaylist = async () => {
    try {
      const playlistId = await createEmptyPlaylist();
      await addTracksToPlaylist(playlistId);
      console.log('playlist created');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Show Tracks</h1>
      {tracks && (
        <>
          <ul className='recommended-tracks'>
            {tracks.map((track, index) => (
              <li key={`track${index}`}>
                {track[1]}: <i>{track[0]}</i>
              </li>
            ))}
          </ul>

          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={savePlaylist}
          >
            Save Playlist
          </Button>
        </>
      )}
    </div>
  );
};

export default Tracks;
