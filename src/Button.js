import React from "react";

export const Button = (props) => {
  return (
    <button
      className={props.light ? "light-button" : "dark-button"}
      onClick={props.onClick}
    >
      Refresh
    </button>
  );
};
