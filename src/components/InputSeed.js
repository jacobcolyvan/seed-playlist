import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputSeed = ({ title, setSeed }) => {
  return (
    <div>
      <br />
      <TextField
        fullWidth
        label={title}
        type='string'
        onChange={(e) => {
          setSeed(e.target.value);
        }}
        style={{ flex: 1, margin: '0 20px 0 0', color: 'white' }}
      />
    </div>
  );
};

export default InputSeed;
