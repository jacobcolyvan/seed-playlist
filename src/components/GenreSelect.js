import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import genres from '../utils/genres.json';

const GenreSelect = ({ setGenre }) => {
  return (
    <div>
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
        style={{ margin: '8px 0'}}
        freeSolo
      />
    </div>
  );
};

export default GenreSelect;
