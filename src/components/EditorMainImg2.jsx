import React, { useContext, useState, useRef } from 'react';
import { Box } from '@mui/material';
import { filterContext } from '../common/Context';


const EditorMainImg = ({editorSetting}) => {

  const figure = useRef()

  const {filterMethod} = useContext(filterContext);
  const { brightness, rotation, scaleX, scaleY } = editorSetting;
  const [hover, setHover] = useState(false);
  const [pageX, setPageX] = useState(50);
  const [pageY, setPageY] = useState(50);

  const mouseMoveHandler = (e) => {
    console.log();
    var ClientX = e.clientX - figure.current.offsetLeft;
    var ClientY = e.clientY - figure.current.offsetTop;

    const mWidth = figure.current.offsetWidth;
    const mHeight = figure.current.offsetHeight;

    ClientX = ClientX / mWidth * 100;
    ClientY = ClientY / mHeight * 100;

    setPageX(ClientX)
    setPageY(ClientY)
  }
  


  return (
    <>
      <figure
        ref={figure}
        style={{width: '100%',height: '0', overflow: 'hidden', borderRadius: '16px', position: 'relative', paddingBottom: '100%',
        transform : `${scaleX ? 'scaleX(-1)': ''} ${scaleY ? 'scaleY(-1)': ''}`, transition: 'transform 0.2s ease-out',
      }}
        onMouseMove={mouseMoveHandler}
        onMouseOver={()=>setHover(!hover)}
        onMouseOut={()=>setHover(!hover)}
      >
        <img
          
          style={{maxWidth: '100%', minWidth: '100%', height: '100%', position: 'absolute', left: '50%', top: '50%',
          pointerEvents: 'none',
          transform: `${hover ? 'translate(-' + pageX + '%, -' + pageY + '%) scale(2)' : 'translate(-50%, -50%)'}  rotate(${rotation}deg) scale(${Math.abs(Math.sin(rotation*(Math.PI/180))) + Math.abs(Math.cos(rotation*(Math.PI/180)))})`,
          filter: `brightness(${brightness}) ${filterMethod} `,
          transition: 'transform 0.2s ease-out',
        }}
          src="https://i.picsum.photos/id/54/400/400.jpg?hmac=bYiTE5dgf7aeX3u33wjsWzjFQLppWUPbsfVTn33OM9I" />  
      </figure>        
    </>
  )
}

export default EditorMainImg;

// 