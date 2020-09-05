import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const SelectMode = ({ mode, setMode }) => {
  const handleModeCHange = (event) => {
    setMode(event.target.value)
  }

  return (
    <div>
      <FormControl fullWidth>
      <InputLabel id="mode-select-label" >select mode (major/minor)</InputLabel>
      <Select
        labelId='Select a Mode (major/minor)'
        id='mode-select'
        value={mode}
        onChange={handleModeCHange}
      >
        <MenuItem value={false}>None</MenuItem>
        <MenuItem value={'1'}>Major</MenuItem>
        <MenuItem value={'0'}>Minor</MenuItem>
      </Select>
      </FormControl>
    </div>
  );
};

export default SelectMode;


    // <div id='select-mode' >
    //   <select
    //       value={mode}
    //       onChange={(e) => {
    //         setMode(e.target.value);
    //       }}
    //       style={{ margin: '12px 0', width: '100%', height: '32px'}}
    //     >
    //       <option defaultValue value='false'>Doesn't matter</option>
    //       <option value='0'>
    //         Major
    //       </option>
    //       <option value='1'>Minor</option>
    //     </select>
    // </div>
