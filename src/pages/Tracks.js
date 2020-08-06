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
    </div>
  );
};

export default Tracks;
