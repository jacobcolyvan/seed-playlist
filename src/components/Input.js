import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ title, saveParam, limit, wholeNumber }) => {
  const [error, setError] = useState(false)

  let label = `${title}`
  if (limit !== 1) label = `${title} (0 - ${limit})`;

  const validateInput = (e) => {
    const value = e.target.value
    if (wholeNumber && !Number.isInteger(parseFloat(value))) {
      setError(true)     
    } else if (!(!value || (value >= 0 && value < limit))) {
      setError(true)    
    } else {
      setError(false)
      saveParam(title, value, limit)
    } 

    // if (wholeNumber) {
    //   if(Number.isInteger(parseFloat(value)) 
    //   && (!value || (value >= 0 && value < limit))) {
    //     setError(false)
    //     saveParam(title, value, limit)
    //   } else {
    //     setError(true)     
    //   }
    // } else if (!value || (value >= 0 && value < limit)) {
    //   setError(false)
    //   saveParam(title, value, limit)
    // } else {
    //   setError(true)  
    // } 
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
