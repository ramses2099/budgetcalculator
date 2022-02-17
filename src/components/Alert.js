import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div
      className={`alert alert-${type} d-flex align-items-center`}
      role="alert"
    >
      <i className="bi bi-exclamation-triangle"></i>
      <div className="p-2">{text}</div>
    </div>
  );
};

export default Alert;
