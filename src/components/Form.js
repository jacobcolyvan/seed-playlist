import React, { useState } from 'react';
import Input from './Input';
import GenreSelect from './GenreSelect';
import Button from '@material-ui/core/Button';

const Form = () => {
  const [instrumentalness, setInstrumentalness] = useState(undefined);
  const [valence, setValence] = useState(undefined);
  const [genre, setGenre] = useState(undefined);

  const onSubmit = () => {
    console.log([valence, instrumentalness, genre]);
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
