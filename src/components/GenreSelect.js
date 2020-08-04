import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import genres from '../utils/genres.json';

const GenreSelect = ({ setGenre }) => {
  return (
    <div>
      <br />
      <Autocomplete
        fullWidth
        id='Genre-Autocomplete'
        options={genres.genres}
        // value={value}
        onChange={(event, newValue) => {
          setGenre(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label='Genre' variant='outlined' />
        )}
      />
    </div>
  );
};

export default GenreSelect;
