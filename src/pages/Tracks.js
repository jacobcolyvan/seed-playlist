import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Tracks = ({ tracks }) => {
  const history = useHistory();

  useEffect(() => {
    if (!tracks) {
      history.push('/');
    }
  }, [history, tracks]);

  // useEffect(() => {
  //   console.log(tracks);
  // }, [tracks]);

  return (
    <div>
      <h1>Show Tracks</h1>
      {tracks && (
        <ul className='recommended-tracks'>
          {tracks.map((track, index) => (
            <li key={`track${index}`}>
              {track[1]}: <i>{track[0]}</i>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tracks;
