import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';

const ErrorNotice = ({message, clearError}) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })

  return (
    <div className='error-notice'>
      <span>{message}</span>
      <Button onClick={clearError} variant='outlined' style={{padding: '5px', backgroundColor: 'white'}}>
        <CloseIcon/>
      </Button>
      
    </div>
  );
};

export default ErrorNotice;
