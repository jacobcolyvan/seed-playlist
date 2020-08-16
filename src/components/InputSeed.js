import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import CircularProgress from '@material-ui/core/CircularProgress';

const InputSeed = ({ title, seedValue, setSeedValue, searchSpotify, searchOptions, type }) => {
  // const [inputValue, setInputValue] = useState([]);

  return (
    <div>
      <br />
      <Autocomplete
        multiple
        fullWidth
        id={`${title}-search`}
        options={searchOptions? searchOptions : []}
        // options={searchOptions}
        getOptionLabel={option => option.name}
        // value={seedValue}
        onChange={(e, newValue) => {
          // console.log(newValue);
          // console.log(seedValue);
          // console.log(searchOptions);
          setSeedValue(newValue.map(item => item.id))
          
        }}
        onInputChange={(e, newInputValue) => {
          // setInputValue(newInputValue)
          searchSpotify(newInputValue, type)
        }}
        renderInput={(params) => (
          <TextField {...params} label={title} variant='outlined' />
        )}
        // getOptionSelected={() => {}}
      />
    </div>
  );
};

export default InputSeed;