import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Tracks = ({ tracks }) => {
  const history = useHistory();
  useEffect(() => {
    if (!tracks) {
      history.push('/');
    }
  }, [history]);

  return (
    <div>
      <h1>Show Tracks</h1>
    </div>
  );
};

export default Tracks;
