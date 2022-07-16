import React from 'react';
import { Box, Typography} from '@mui/material';
import { NumberHolder } from '../';

const RangeBox = ({name, min, max, value, setValue, step, children}) => {
  return (
    <Box
        sx={{display: 'flex', justifyContent: 'space-around'}}>
        <Typography sx={{color: '#888'}}>
            {name}
        </Typography>
        <input type="range" min={min} max={max} value={value} step={step} 
            onChange={name === 'روشنایی' ? 
              (e)=>setValue(values => ({...values, brightness: e.target.value})) 
            :
             (e)=>setValue(values => ({...values, rotation: e.target.value}))}
        />
        <NumberHolder> { value } </NumberHolder>
    </Box>
  )
}

export default RangeBox;