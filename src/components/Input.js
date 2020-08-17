import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ title, saveParam, limit }) => {
  let label = `${title}`
  if (limit !== 1) label = `${title} (0 - ${limit})`;

  return (
    <div>
      <br />
      <TextField
        fullWidth
        label={label}
        type='number'
        onChange={(e) => {
          saveParam(title, e.target.value, limit);
        }}
        style={{ flex: 1, margin: '0 20px 0 0', color: 'white' }}
        // min='0'
        // max='5'
      />
    </div>
  );
};

export default Input;
