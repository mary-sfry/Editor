import { v4 as uuidv4 } from "uuid";
const data = [
  { id: uuidv4(), name: "none", method: "" },
  { id: uuidv4(), name: "grayscale", method: "grayscale(1)" },
  { id: uuidv4(), name: "sepia", method: "sepia(1)" },
  { id: uuidv4(), name: "invert", method: "invert(1)" },
  { id: uuidv4(), name: "blur", method: "blur(2px)" },
  { id: uuidv4(), name: "saturate", method: "saturate(2)" },
  { id: uuidv4(), name: "contrast", method: "contrast(2)" },
  { id: uuidv4(), name: "hue-rotate", method: "hue-rotate(90deg)" },
];

export default data;
