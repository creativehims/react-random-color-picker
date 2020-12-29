import React, { useState, useEffect } from "react";
import { Button } from "./Button";

const Random = () => {
  const [color, setColor] = useState([0, 122, 255]);

  useEffect(() => {
    applyColor();
  }, [color]);

  const formatColor = (ary) => {
    return "rgb(" + ary.join(", ") + ")";
  };

  const isLight = () => {
    const rgb = color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  };

  const applyColor = () => {
    const newColor = formatColor(color);
    document.body.style.background = newColor;
  };

  const chooseColor = () => {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  };

  const handleClick = () => {
    setColor(chooseColor());
  };

  return (
    <div>
      <h1 className={isLight() ? "white" : "black"}>
        Your color is {formatColor(color)};
      </h1>
      <Button light={isLight()} onClick={handleClick} />
    </div>
  );
};

export default Random;
