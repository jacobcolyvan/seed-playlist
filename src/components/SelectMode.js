import React from 'react'
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/Select'
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';

const SelectMode = ({mode, setMode}) => {
  return (
    <div id='select-mode' >
      <select
          value={mode}
          onChange={(e) => {
            setMode(e.target.value);
          }}
          style={{ margin: '12px 0', width: '100%', height: '32px'}}
        >
          <option defaultValue value='false'>Doesn't matter</option>
          <option value='0'>
            Major
          </option>
          <option value='1'>Minor</option>
        </select>
    </div>
  )
}

export default SelectMode



// {<FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Select Major/Minor</InputLabel>
//       <Select
//           labelId="Select Major/Minor"
//           id="select-mode"
//           // defaultValue=''
//           value={mode}
//           onChange={(e) => {setMode(e.target.value)}}
//           // fullWidth
//           style={{ margin: '8px 0'}}
//         >
//           <MenuItem value='false' >Doesn't matter</MenuItem>
//           <MenuItem value='1' >Major</MenuItem>
//           <MenuItem value='0' >Minor</MenuItem>
//         </Select>
//       </FormControl>}