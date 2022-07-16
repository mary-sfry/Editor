import React, { useContext } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { filterContext } from '../common/Context';

const FilteredImg = ({item}) => {

    const {filters, setFilterMethod} = useContext(filterContext);

    const filterHandler = (id) => {
        const filterarr = filters.filter(filter => filter.id === id)
        setFilterMethod(filterarr[0].method)
    }

  return (
    <>
        <Grid item xs={6} sm={3}>
            <Box 
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer'}}
                onClick={()=>filterHandler(item.id)}>
                <img 
                    className='filtered-img'
                    src="https://i.picsum.photos/id/54/400/400.jpg?hmac=bYiTE5dgf7aeX3u33wjsWzjFQLppWUPbsfVTn33OM9I"
                    alt=""
                    style={{filter: `${item.method}`}}
                />
                <Typography sx={{mt:1, color: '#888'}}>
                    {item.name}
                </Typography>
            </Box>
        </Grid>
    </>
  )
}

export default FilteredImg;