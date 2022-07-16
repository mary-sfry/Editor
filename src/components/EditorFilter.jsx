import React, { useContext } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { FilteredImg, Title, BorderedBox } from './';
import { filterContext } from '../common/Context';

const EditorFilter = () => {

  const { filters } = useContext(filterContext);

  return (
    <>
        <Title color='#16C2D2'>فیلترها</Title>
        <BorderedBox>
          <Grid container spacing={2}>
            {
              filters.map(item => <FilteredImg key={item.id} item={item} />)
            }
          </Grid>
        </BorderedBox>
    </>
  )
}

export default EditorFilter