import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const InputSeed = ({ title, setSeed, searchSpotify, searchOptions }) => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  // const loaded = useRef(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([])

  useEffect(() => {
    console.log('setting options');
    searchOptions? setOptions(searchOptions.ids) : setOptions(['no options'])
  }, [searchOptions])

  return (
    <div>
      <br />
      <Autocomplete
        fullWidth
        id={`${title}-search`}
        options={options}
        value={value}
        onChange={(e, newValue) => {
          setSeed(newValue);
          setValue(newValue)
        }}
        onInputChange={(event, newInputValue) => {
          searchSpotify(newInputValue, 'artist')
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label={title} variant='outlined' />
        )}
      />

      {/* <Button onClick={() => {searchSpotify('t', 'artist')}}>searhc</Button> */}
    </div>
  );
};

export default InputSeed;




// <TextField
//   fullWidth
//   label={title}
//   type='string'
//   onChange={(e) => {
//     setSeed(e.target.value);
//   }}
//   style={{ flex: 1, margin: '0 20px 0 0', color: 'white' }}
// />;
