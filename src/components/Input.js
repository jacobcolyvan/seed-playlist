import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ title, saveParam, limit, setError }) => {
  let label = `${title}`
  if (limit !== 1) label = `${title} (0 - ${limit})`;

  return (
    <>
      <TextField
        fullWidth
        label={label}
        type='number'
        onChange={(e) => {
          
          saveParam(title, e.target.value, limit);
        }}
        style={{ flex: 1, margin: '4px 20px 0 0', color: 'white'}}
      />
    </>
  );
};

export default Input;
