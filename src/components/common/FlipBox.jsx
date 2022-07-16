import React from 'react';
import { Box } from '@mui/material';
import { CgEditFlipH, CgEditFlipV } from "react-icons/cg";

const FlipBox = ({value, setValue, children}) => {
  return (
    <Box 
        sx={{bgcolor: '#16C2D2', px:3, py:0.5, borderRadius: 2, display: 'flex', alignItems: 'center', cursor: 'pointer'}}
        
        onClick={children == 'x' ? 
        ()=>setValue(values => ({...values, scaleX: !value})) 
            : 
        ()=>setValue(values => ({...values, scaleY: !value}))}
    >
        {
           children == 'x' ?  <CgEditFlipH size='40px' color='white' /> : <CgEditFlipV size='40px' color='white' />
        }
        
    </Box>
  )
}

export default FlipBox