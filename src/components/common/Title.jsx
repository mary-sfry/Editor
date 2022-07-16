import React from 'react';
import { Typography } from '@mui/material';

const Title = ({ children, color }) => {
  return (
    <Typography
        sx={{color, fontWeight: 'bold', mb: 1}}>
        { children }
    </Typography>
  )
}

export default Title