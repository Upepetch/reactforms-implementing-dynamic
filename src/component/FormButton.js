import React from "react";
import "./FormButton.css";
export const FormButton = ({value, onClick, selected}) => {
  return (
    <div>
      <button type="button"  className={`tag ${selected ? "selected" : ""}`} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
