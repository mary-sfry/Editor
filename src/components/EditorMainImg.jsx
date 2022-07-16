import React, { useContext, useState, useRef } from "react";
import { filterContext } from "../context/FilterContext";
import flowerImg from "../assets/images/flower.jpg";

const EditorMainImg = ({ editorSetting }) => {
  const figureRef = useRef();

  const { filterMethod } = useContext(filterContext);
  const { brightness, rotation, scaleX, scaleY } = editorSetting;
  const [hover, setHover] = useState(false);
  const [pageX, setPageX] = useState(50);
  const [pageY, setPageY] = useState(50);

  const mouseMoveHandler = (e) => {
    let clientX = e.clientX - figureRef.current.offsetLeft;
    let clientY = e.clientY - figureRef.current.offsetTop;

    const imageWidth = figureRef.current.offsetWidth;
    const imageHeight = figureRef.current.offsetHeight;

    clientX = (clientX / imageWidth) * 100;
    clientY = (clientY / imageHeight) * 100;

    setPageX(clientX);
    setPageY(clientY);
  };

  const hoverHandler = () => {
    setHover(!hover);
  };

  let zoomInRotate =
    Math.abs(Math.sin(rotation * (Math.PI / 180))) +
    Math.abs(Math.cos(rotation * (Math.PI / 180)));
  const filterStyle = {
    transform: `${
      hover
        ? "translate(-" + pageX + "%, -" + pageY + "%) scale(2)"
        : "translate(-50%, -50%)"
    }
    rotate(${rotation}deg) scale(${zoomInRotate})`,
    filter: `brightness(${brightness}) ${filterMethod} `,
  };

  const FlipStyle = {
    transform: `${scaleX ? "scaleX(-1)" : ""} ${scaleY ? "scaleY(-1)" : ""}`,
  };

  return (
    <figure
      ref={figureRef}
      className="main-img"
      style={FlipStyle}
      onMouseMove={mouseMoveHandler}
      onMouseOver={hoverHandler}
      onMouseOut={hoverHandler}
    >
      <img style={filterStyle} src={flowerImg} />
    </figure>
  );
};

export default EditorMainImg;
