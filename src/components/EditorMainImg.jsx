import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { filterContext } from '../common/Context';


const EditorMainImg = ({editorSetting}) => {

  const {filterMethod} = useContext(filterContext);
  const { brightness, rotation, scaleX, scaleY } = editorSetting;
  const [hover, setHover] = useState(false);
  const [pageX, setPageX] = useState();
  const [pageY, setPageY] = useState();

  const mouseMoveHandler = (e) => {
    // const x = e.pageX/e.target.offsetWidth*100;
    // const y = e.pageY/e.target.offsetHeight*100;
    
    const x = (e.pageX)
    const y = (e.pageY) / (e.target.offsetHeight * 100);
    setPageX(e.pageX/10);
    setPageY(e.pageY/10);
    console.log(e)
  }

  console.log(pageX + " " + pageY);


  return (
    <>
      <Box 
        sx={{overflow: 'hidden', borderRadius: '16px'}}>
        <img
          src="https://i.picsum.photos/id/54/400/400.jpg?hmac=bYiTE5dgf7aeX3u33wjsWzjFQLppWUPbsfVTn33OM9I"
          className='main-img'
          onMouseOver={()=>setHover(!hover)}
          onMouseOut={()=>setHover(!hover)}
          onMouseMove={mouseMoveHandler}
          style={{
            filter: `brightness(${brightness}) ${filterMethod} `,
            transform: `${scaleX ? 'scaleX(-1)': ''} ${scaleY ? 'scaleY(-1)': ''} rotate(${rotation}deg) 
            scale(${Math.abs(Math.sin(rotation*(Math.PI/180))) + Math.abs(Math.cos(rotation*(Math.PI/180)))})
            ${hover ? 'scale(1.5)': ''}
            `,
            transformOrigin: `${pageX}% ${pageY}%`,
            transition: 'transform 0.2s ease-out',
          }}
        />
      </Box>
    </>
  )
}

export default EditorMainImg;
// translate(${pageX/10}px,${pageY/10}px)
// ${hover ? 'translate('+pageX/1.2+'px,' + pageY/1.2+ 'px)' : ''} 
// backgroundPosition: `${pageX}% ${pageY}%`,
// objectPosition: `${pageX}% ${pageY}%`,