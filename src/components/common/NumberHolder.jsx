import React from 'react';
import { Box, Typography } from '@mui/material';

const NumberHolder = ({ children }) => {
  return (
    <Box component='span'
        sx={{border: 2 ,borderRadius: 8,px:1, borderColor: '#eee', pt:0.5, textAlign: 'center'}}>
        <Typography 
            sx={{fontSize: '12px', color: '#888', minWidth: '20px'}}>
            {children}
        </Typography>
    </Box>
  )
}

export default NumberHolder