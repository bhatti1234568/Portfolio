// ThemeItem.jsx
import React from "react";

const ThemeItem = ({ hue, img, changeColor }) => {
  return (
    <img
      src={img}
      alt="Theme preview"
      className="theme-img"
      onClick={() => {
        changeColor(hue);
      }}
    />
  );
};

export default ThemeItem;
