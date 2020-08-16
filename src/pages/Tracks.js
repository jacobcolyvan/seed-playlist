import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
// Add releevant title and descriptiuon on playlist creation 

const Tracks = ({ tracks, token }) => {
  const history = useHistory();
  const [playlistSaved, setPlaylistSaved] = useState(false)
  const [playlistId, setPlaylistId] = useState(undefined);

  useEffect(() => {
    if (!tracks) {
      history.push('/');
    }
  }, [history, tracks]);

  const addTracksToPlaylist = async (playlistId) => {
    const trackIds = tracks.map((track) => `spotify:track:${track[3]}`);

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

    
    const id = spotifyRes.data.id
    const link = spotifyRes.data.external_urls.spotify
    setPlaylistId(id);

    return [id, link];
  };

  const savePlaylist = async () => {
    try {
      const playlistInfo = await createEmptyPlaylist();
      await addTracksToPlaylist(playlistInfo[0]);
      setPlaylistSaved(true)
      window.open(playlistInfo[1],'_blank');
      console.log('playlist created');
    } catch (err) {
      console.log(err.message);
    }
  };

  const deletePlaylist = async () => {
    try {
      await axios({
        method: 'delete',
        url: `https://api.spotify.com/v1/playlists/${playlistId}/followers`,
        headers: {
          Authorization: 'Bearer ' + token
        },
      })
      setPlaylistSaved(false)
      console.log('playlist deleted');
    } catch (err) {
      console.log(err.message);

    }
  }

  const goBackToForm = () => {
    history.push('/')
  }

  return (
    <div>
      <h1>Show Tracks</h1>
      {tracks && (
        <>
          <ul className='recommended-tracks'>
            {tracks.map((track, index) => (
              <li className='track' key={`track${index}`}>
                {track[1]}: <i>{track[0]}</i>
                {/* put play button here */}
              </li>
            ))}
          </ul>
          
          <br/>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={savePlaylist}
            disabled={playlistSaved}
            // style={{ margin: '2px 0' }}
          >
            Save Playlist
          </Button>

          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={deletePlaylist}
            disabled={!playlistSaved}
            // style={{ margin: '2px 0' }}
          >
            Delete Playlist
          </Button>

          <Button variant='outlined'
            color='secondary'
            fullWidth
            onClick={goBackToForm}
            style={{ margin: '6px  0' }}
          >
              New Reccomendations (go back)
          </Button>
        </>
      )}
    </div>
  );
};

export default Tracks;
