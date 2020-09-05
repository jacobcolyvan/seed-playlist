import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ title, saveParam, limit }) => {
  let label = `${title}`
  if (limit !== 1) label = `${title} (0 - ${limit})`;

  const [error, setError] = useState(false)

  const validateInput = (e) => {
    console.log(e.target.value)
    if (!e.target.value || (e.target.value >= 0 && e.target.value < limit) ) {
      setError(false)
      saveParam(title, e.target.value, limit)
    } else {
      setError(true)
    } 
  }

  return (
    <>
      <TextField
        fullWidth
        label={label}
        type='number'
        onChange={validateInput}
        style={{ flex: 1, margin: '4px 20px 0 0', color: 'white'}}
        error={error}
        helperText={error ? "Invalid range" : false}
      />
    </>
  );
};

export default Input;
