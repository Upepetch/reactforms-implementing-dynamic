import React from "react";
import "./FormButton.css";
export const FormButton = (props) => {
  return (
    <div>
      <button className="tag">{props.value}</button>
    </div>
  );
};
