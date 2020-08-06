import React, { useState } from 'react';
import Input from './Input';
import GenreSelect from './GenreSelect';
import Button from '@material-ui/core/Button';

const Form = () => {
  const [instrumentalness, setInstrumentalness] = useState(undefined);
  const [valence, setValence] = useState(undefined);
  const [genre, setGenre] = useState(undefined);

  const onSubmit = () => {
    if (genre) {
      console.log([valence, instrumentalness, genre]);
    } else {
      //setError to "pick a genre/artist/track ya twat"
      console.log('You need a genre mate');
    }
  };

  return (
    <div>
      <p>{genre || 'no genre'}</p>
      <form>
        <Input title='Instrumentalness' setValue={setInstrumentalness} />
        <Input title='Valence' setValue={setValence} />
        <GenreSelect genre={genre} setGenre={setGenre} />

        <br />
        <Button variant='outlined' color='primary' fullWidth onClick={onSubmit}>
          Generate
        </Button>
      </form>
    </div>
  );
};

export default Form;
