import React from "react";
import "./FormButton.css";
export const FormButton = ({value, onClick}) => {
  return (
    <div>
      <button className="tag" onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
