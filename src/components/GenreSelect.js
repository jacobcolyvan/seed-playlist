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
        onChange={(e, newValue) => {
          setGenre(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label='genre' variant='outlined' />
        )}
        multiple
        max='5'
      />
    </div>
  );
};

export default GenreSelect;
