import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
// Add releevant title and descriptiuon on playlist creation 

const Tracks = ({ tracks, token, playlistDescription }) => {
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
        name: `gena #${Math.round(Math.random() * (1000) *1)}`,
        description: playlistDescription || `A generated playlist`,
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
      <h1><i>Recommendations</i></h1>
      {playlistDescription && <p style={{paddingBottom: '16px'}}>{playlistDescription}</p>}
      
      {tracks && (
        <>
          <ul className='recommended-tracks'>
            {tracks.map((track, index) => (
              <li className='track' key={`track${index}`}>
                <div className='single-track-div'>
                  <div className='track-name'>{track[1]}: <i>{track[0]}</i></div>
                  {/* put play button here */}
                  {track[4] && <img src={track[4]} alt={`track img`} width="90" height="90" />}
                </div>
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
          >
            Save Playlist
          </Button>

          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={deletePlaylist}
            disabled={!playlistSaved}
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
