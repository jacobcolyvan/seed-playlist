import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ title, saveParam }) => {
  return (
    <div>
      <br />
      <TextField
        fullWidth
        label={title}
        type='number'
        onChange={(e) => {
          saveParam(title, e.target.value);
        }}
        style={{ flex: 1, margin: '0 20px 0 0', color: 'white' }}
        min='0'
        max='1'
      />
    </div>
  );
};

export default Input;
